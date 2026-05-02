/**
 * Generic Admin - Schema-less Form Generator
 */

const Admin = {
    data: null,
    defaultData: null,

    init: async function () {
        try {
            // Load default data
            const response = await fetch('../js/db.json');
            this.defaultData = await response.json();

            // Load saved data from localstorage if available
            const saved = localStorage.getItem('ce_data');
            if (saved) {
                this.data = JSON.parse(saved);
                this.showToast('Loaded saved changes from LocalStorage');
            } else {
                this.data = JSON.parse(JSON.stringify(this.defaultData));
            }

            this.render();
        } catch (e) {
            console.error(e);
            alert('Failed to load data.');
        }
    },

    render: function () {
        const tabContainer = document.getElementById('adminTabs');
        const formContainer = document.getElementById('form-container');

        tabContainer.innerHTML = '';
        formContainer.innerHTML = '';

        const keys = Object.keys(this.data);

        keys.forEach((key, index) => {
            // 1. Create Tab
            const isActive = index === 0;
            const li = document.createElement('li');
            li.className = 'nav-item';

            const btn = document.createElement('button');
            btn.className = `nav-link ${isActive ? 'active' : ''}`;
            btn.id = `tab-${key}`;
            btn.setAttribute('data-bs-toggle', 'tab');
            btn.setAttribute('data-bs-target', `#pane-${key}`);
            btn.type = 'button';
            btn.role = 'tab';
            btn.innerText = key.toUpperCase().replace('_', ' ');
            li.appendChild(btn);
            tabContainer.appendChild(li);

            // 2. Create Pane
            const pane = document.createElement('div');
            pane.className = `tab-pane fade ${isActive ? 'show active' : ''}`;
            pane.id = `pane-${key}`;
            pane.role = 'tabpanel';
            pane.setAttribute('tabindex', '0');

            // 3. Build Form Content for this key
            const content = this.buildForm(this.data[key], key);
            pane.appendChild(content);
            formContainer.appendChild(pane);
        });
    },

    buildForm: function (data, prefix = '') {
        const wrapper = document.createElement('div');
        wrapper.className = 'pt-3';

        // Helper to determine type
        const getType = (val) => {
            if (val === null) return 'null';
            if (Array.isArray(val)) return 'array';
            if (typeof val === 'object') return 'object';
            return typeof val;
        };

        const keys = typeof data === 'object' ? Object.keys(data) : [];

        if (keys.length === 0 && typeof data !== 'object') {
            // Handle edge case where top level is a primitive? unlikely based on db.json
            return wrapper;
        }

        keys.forEach(key => {
            const value = data[key];
            const type = getType(value);
            const path = prefix ? `${prefix}.${key}` : key;

            const group = document.createElement('div');
            group.className = 'mb-3';

            // Create Label
            if (type !== 'object' && type !== 'array') {
                const label = document.createElement('label');
                label.className = 'field-label';
                // Improve label readability
                let labelText = key.replace(/_/g, ' ').toUpperCase();
                // Translate common keys if possible (simple map)
                const translations = {
                    "TITLE": "TÍTULO", "DESCRIPTION": "DESCRIÇÃO", "PHONE": "TELEFONE",
                    "HOURS": "HORÁRIO", "SOCIAL": "REDES SOCIAIS", "MENU": "MENU",
                    "SLIDES": "SLIDES CARROSSEL", "ACTIVE": "ATIVO", "IMAGE": "IMAGEM",
                    "LINK": "LINK / URL"
                };
                if (translations[labelText]) labelText = translations[labelText];

                label.innerText = labelText;
                group.appendChild(label);
            }

            if (type === 'string') {
                const isLong = value.length > 60 || key.includes('description') || key.includes('text') || key.includes('message');
                const input = document.createElement(isLong ? 'textarea' : 'input');
                input.className = 'form-control';
                if (!isLong) input.type = 'text';
                else input.rows = 3;

                input.value = value;
                input.onchange = (e) => this.update(path, e.target.value);
                group.appendChild(input);

            } else if (type === 'boolean') {
                const checkDiv = document.createElement('div');
                checkDiv.className = 'form-check form-switch';

                const input = document.createElement('input');
                input.className = 'form-check-input';
                input.type = 'checkbox';
                input.checked = value;
                input.onchange = (e) => this.update(path, e.target.checked);

                const label = document.createElement('label');
                label.className = 'form-check-label';
                label.innerText = key;

                checkDiv.appendChild(input);
                checkDiv.appendChild(label);

                // Clear previous label
                group.innerHTML = '';
                group.appendChild(checkDiv);

            } else if (type === 'object') {
                const card = document.createElement('div');
                card.className = 'card mb-3';
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h6'); // Smaller heading for nested
                cardTitle.className = 'card-title text-secondary border-bottom pb-2 mb-3';
                cardTitle.innerText = key.toUpperCase().replace(/_/g, ' ');
                cardBody.appendChild(cardTitle);

                cardBody.appendChild(this.buildForm(value, path));
                card.appendChild(cardBody);
                group.appendChild(card);

            } else if (type === 'array') {
                const card = document.createElement('div');
                card.className = 'card mb-3 bg-light';
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const header = document.createElement('div');
                header.className = 'd-flex justify-content-between align-items-center mb-3';
                header.innerHTML = `<h6 class="m-0 text-primary">${key.toUpperCase().replace(/_/g, ' ')} (${value.length})</h6>`;

                const addBtn = document.createElement('button');
                addBtn.className = 'btn btn-sm btn-success';
                addBtn.innerHTML = '<i class="bi-plus-lg"></i> Adicionar Item';
                addBtn.onclick = () => this.addItem(path);
                header.appendChild(addBtn);

                cardBody.appendChild(header);

                value.forEach((item, index) => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'json-array-item';

                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'btn btn-danger btn-sm remove-btn';
                    removeBtn.innerHTML = '<i class="bi-trash"></i>';
                    removeBtn.onclick = () => this.removeItem(path, index);
                    itemDiv.appendChild(removeBtn);

                    // Check if primitives or objects
                    if (typeof item === 'object') {
                        itemDiv.appendChild(this.buildForm(item, `${path}.${index}`));
                    } else {
                        // Primitive Array (e.g. list of strings)
                        const input = document.createElement('input');
                        input.className = 'form-control';
                        input.value = item;
                        input.onchange = (e) => this.update(`${path}.${index}`, e.target.value);
                        itemDiv.appendChild(input);
                    }

                    cardBody.appendChild(itemDiv);
                });

                card.appendChild(cardBody);
                group.appendChild(card);
            }

            wrapper.appendChild(group);
        });

        return wrapper;
    },

    update: function (path, value) {
        // path: "header.social.0.url"
        const keys = path.split('.');
        let ref = this.data;
        for (let i = 0; i < keys.length - 1; i++) {
            ref = ref[keys[i]];
        }
        ref[keys[keys.length - 1]] = value;
    },

    addItem: function (path) {
        const keys = path.split('.');
        let ref = this.data;
        for (let i = 0; i < keys.length; i++) {
            ref = ref[keys[i]];
        }

        // Determine template
        let template = "";
        if (ref.length > 0) {
            // Clone first item struct
            template = JSON.parse(JSON.stringify(ref[0]));
            if (typeof template === 'object') {
                // Clear values
                const clear = (obj) => {
                    Object.keys(obj).forEach(k => {
                        if (typeof obj[k] === 'string') obj[k] = "";
                        else if (typeof obj[k] === 'number') obj[k] = 0;
                        else if (typeof obj[k] === 'boolean') obj[k] = false;
                        else if (typeof obj[k] === 'object') clear(obj[k]);
                    });
                };
                clear(template);
            } else {
                template = "";
            }
        } else {
            // Fallback empty object
            template = {};
        }

        ref.push(template);
        this.render(); // Re-render to show new item
    },

    removeItem: function (path, index) {
        if (!confirm('Você tem certeza?')) return;
        const keys = path.split('.');
        let ref = this.data;
        for (let i = 0; i < keys.length; i++) {
            ref = ref[keys[i]];
        }
        ref.splice(index, 1);
        this.render();
    },

    save: function () {
        localStorage.setItem('ce_data', JSON.stringify(this.data));
        this.showToast('Alterações salvas! Atualize o site para ver.');
    },

    reset: function () {
        if (confirm('Restaurar tudo para o padrão?')) {
            localStorage.removeItem('ce_data');
            this.data = JSON.parse(JSON.stringify(this.defaultData));
            this.render();
            this.showToast('Restaurado para o padrão.');
        }
    },

    download: function () {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 4));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "db.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },

    showToast: function (msg) {
        const el = document.getElementById('liveToast');
        document.getElementById('toast-msg').innerText = msg;
        const toast = new bootstrap.Toast(el);
        toast.show();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Admin.init();
});
