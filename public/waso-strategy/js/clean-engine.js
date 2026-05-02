/**
 * CleanEngine - Dynamic Content Loader
 * Decouples content (JSON) from structure (HTML)
 */

const CleanEngine = {
    data: null,

    init: async function () {
        try {
            // Check for local overrides (Generic Admin preview mode)
            const localData = localStorage.getItem('ce_data');

            if (localData) {
                console.log('CleanEngine: Loading data from LocalStorage (Preview Mode)');
                this.data = JSON.parse(localData);

                // Inject Preview Banner
                const banner = document.createElement('div');
                banner.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;background:#ffc107;color:#000;text-align:center;padding:10px;z-index:9999;font-weight:bold;box-shadow:0 -2px 10px rgba(0,0,0,0.1);';
                banner.innerHTML = '⚠️ MODO PREVIEW: Você está vendo alterações não publicadas. <a href="admin/index.html" style="color:#000;text-decoration:underline;">Voltar ao Admin</a>';
                document.body.appendChild(banner);
            } else {
                console.log('CleanEngine: Fetching data from db.json');
                const response = await fetch('js/db.json');
                this.data = await response.json();
            }

            this.render();

            // Dispatch event for plugins (like loose sliders) to re-init if needed
            window.dispatchEvent(new Event('clean-engine-rendered'));

        } catch (error) {
            console.error('CleanEngine Error:', error);
        }
    },

    /**
     * Helper to get nested object value by string key "header.phone"
     */
    get: function (path, obj = this.data) {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    },

    render: function () {
        this.bindMeta();
        this.bindSimpleFields();
        this.bindRepeaters();
    },

    bindMeta: function () {
        if (!this.data.meta) return;
        document.title = this.data.meta.title;
        // Bind other meta tags if needed
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = this.data.meta.description;
    },

    bindSimpleFields: function () {
        const elements = document.querySelectorAll('[data-ce-key]');

        elements.forEach(el => {
            const key = el.getAttribute('data-ce-key');
            const value = this.get(key);
            const targetAttr = el.getAttribute('data-ce-attr'); // e.g. "src", "href"

            if (value === null || value === undefined) return;

            if (targetAttr) {
                el.setAttribute(targetAttr, value);
            } else {
                // Default to innerHTML for text content to allow bold tags etc in JSON
                el.innerHTML = value;
            }
        });
    },

    bindRepeaters: function () {
        const repeaters = document.querySelectorAll('[data-ce-repeat]');

        repeaters.forEach(container => {
            const key = container.getAttribute('data-ce-repeat');
            const items = this.get(key);

            if (!Array.isArray(items)) return;

            // Get the template (first child)
            const template = container.firstElementChild;
            if (!template) return;

            // Remove initial template from DOM
            template.remove();

            // Clear container just in case
            container.innerHTML = '';

            items.forEach(item => {
                const clone = template.cloneNode(true);

                // Helper to process an element
                const processElement = (subEl) => {
                    const subKey = subEl.getAttribute('data-ce-sub');
                    const value = item[subKey];
                    const targetAttr = subEl.getAttribute('data-ce-attr');

                    if (value === undefined) return;

                    // Handle Class manipulation
                    if (subEl.hasAttribute('data-ce-class')) {
                        if (typeof value === 'string') {
                            const cls = value.split(' ');
                            subEl.classList.add(...cls);
                        }
                    }

                    // Handle Class Replacement
                    if (subEl.hasAttribute('data-ce-class-replace')) {
                        if (typeof value === 'string') {
                            subEl.className = value;
                        }
                    }

                    if (targetAttr) {
                        subEl.setAttribute(targetAttr, value);
                    } else if (subEl.tagName === 'IMG') {
                        subEl.src = value;
                    } else if (subEl.tagName === 'A' && !targetAttr) {
                        subEl.href = value;
                    } else if (!subEl.hasAttribute('data-ce-class') && !subEl.hasAttribute('data-ce-class-replace')) {
                        subEl.innerHTML = value;
                    }
                };

                // Process descendants
                const subElements = clone.querySelectorAll('[data-ce-sub]');
                subElements.forEach(processElement);

                // Process root element if it has data-ce-sub
                if (clone.hasAttribute('data-ce-sub')) {
                    processElement(clone);
                }

                // Handle "active" state generic logic
                // If item.active is true, add class defined in data-ce-active-class (default 'active')
                // For tabs, we might also need aria-selected
                if (item.active) {
                    const activeClass = template.getAttribute('data-ce-active-class') || 'active';
                    clone.classList.add(...activeClass.split(' '));

                    if (clone.getAttribute('role') === 'tab') {
                        clone.setAttribute('aria-selected', 'true');
                    }
                } else {
                    // Ensure we don't have it if false (in case template had it)
                    const activeClass = template.getAttribute('data-ce-active-class') || 'active';
                    clone.classList.remove(...activeClass.split(' '));
                    if (clone.getAttribute('role') === 'tab') {
                        clone.setAttribute('aria-selected', 'false');
                    }
                }

                container.appendChild(clone);
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    CleanEngine.init();
});
