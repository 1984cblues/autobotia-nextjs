document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Change icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom, .fade-in');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Video Modal Logic
    const modal = document.getElementById('video-modal');
    const btnVideo = document.querySelector('a[href="#video"]');
    const closeBtn = document.querySelector('.close-modal');
    const iframe = document.getElementById('youtube-video');
    const videoSrc = iframe ? iframe.src : '';

    if (btnVideo && modal) {
        btnVideo.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            // Autoplay when opened (optional, depends on browser policies)
            if (iframe) iframe.src = videoSrc + "&autoplay=1";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            // Stop video
            if (iframe) iframe.src = videoSrc;
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            // Stop video
            if (iframe) iframe.src = videoSrc;
        }
    });



    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animateCounter(counter), 20);
        } else {
            counter.innerText = target;
            // Add suffix like + or % if needed
            if (target === 40) counter.innerText = "+" + counter.innerText;
            if (target === 100) counter.innerText += "%";
        }
    };

    // Observer for counters
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Tooltip Logic
    setTimeout(() => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) tooltip.classList.add('show');

        // Hide after some time
        setTimeout(() => {
            if (tooltip) tooltip.classList.remove('show');
        }, 5000);
    }, 3000);

});
