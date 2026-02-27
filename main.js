document.addEventListener('DOMContentLoaded', () => {

    // --- APP STATE & ROUTING ---
    const appRoot = document.getElementById('app-root');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // SPA Router
    const routes = {
        '/': 'page-home',
        '/work': 'page-work',
        '/about': 'page-about',
        '/contact': 'page-contact'
    };

    function renderPage(path) {
        // Default to home if route not found
        const templateId = routes[path] || routes['/'];
        const template = document.getElementById(templateId);

        if (template) {
            // Clean up old observer elements before replacing content
            cleanupObservers();

            // Render new content using innerHTML to guarantee DOM pickup
            appRoot.innerHTML = template.innerHTML;

            // Scroll to top
            window.scrollTo(0, 0);

            // Update active nav links
            updateActiveLinks(path);

            // Re-initialize page specific scripts and animations
            initPageScripts(path);

            // Delay observer attachment slightly to ensure layout is done
            setTimeout(initScrollAnimations, 50);
        }
    }

    function updateActiveLinks(path) {
        navLinks.forEach(link => {
            if (link.dataset.path === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function handleRouting() {
        let hash = window.location.hash.slice(1);
        if (hash === '' || hash === '#') hash = '/';
        renderPage(hash);
    }

    // Listen to URL changes
    window.addEventListener('hashchange', handleRouting);

    // Initial load
    handleRouting();

    // --- LOCAL CLOCK ---
    function updateClock() {
        const timeEl = document.getElementById('clock-time');
        if (!timeEl) return;

        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const timeString = now.toLocaleTimeString('en-US', options);
        timeEl.textContent = timeString;
    }

    // Initial call and interval
    updateClock();
    setInterval(updateClock, 1000);

    // --- GLOBAL SCROLL EFFECTS (Header & Parallax) ---
    const siteHeader = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        // Sticky Frosted Header
        if (window.scrollY > 50) {
            siteHeader?.classList.add('scrolled');
        } else {
            siteHeader?.classList.remove('scrolled');
        }

        // Parallax Effect
        const parallaxEls = document.querySelectorAll('.parallax-bg');
        parallaxEls.forEach(el => {
            const speed = el.dataset.speed || 0.3;
            const yPos = window.scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    });


    // --- MOBILE MENU ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });


    // --- PAGE SPECIFIC SCRIPTS ---
    function initPageScripts(path) {
        if (path === '/work') {
            initWorkFilters();
        }
        // Update year in footer
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    // Work Page Filters
    function initWorkFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const workCards = document.querySelectorAll('.work-grid.full-grid .work-card:not(.empty-state)');
        const emptyState = document.querySelector('.work-card.empty-state');
        const noResults = document.getElementById('no-results');

        if (!filterBtns.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                const filter = e.target.dataset.filter;
                let visibleCount = 0;

                workCards.forEach(card => {
                    try {
                        console.log(`Processing card: ${card.querySelector('.card-title')?.textContent} | Category: ${card.dataset.category} | Current filter: ${filter}`);
                        if (filter === 'all' || card.dataset.category === filter) {
                            card.style.display = 'flex';
                            visibleCount++;
                            // Little animation reset
                            card.classList.remove('fade-up-anim', 'visible');
                            void card.offsetWidth; // trigger reflow
                            card.classList.add('fade-up-anim', 'visible');
                            console.log(` -> Set to flex`);
                        } else {
                            card.style.display = 'none';
                            console.log(` -> Set to none`);
                        }
                    } catch (err) {
                        console.error("Filter loop error:", err);
                    }
                });

                if (visibleCount === 0) {
                    if (noResults) noResults.style.display = 'block';
                    if (emptyState) emptyState.style.display = 'none';
                } else {
                    if (noResults) noResults.style.display = 'none';
                    if (emptyState) emptyState.style.display = 'flex';
                }
            });
        });
    }


    // --- SCROLL ANIMATIONS ---
    function cleanupObservers() {
        // No longer needed for fade-up, but could be used if we store the observer
    }

    function initScrollAnimations() {
        // 1. Initial Load Animations (Above the fold)
        const animatedElements = document.querySelectorAll('.fade-up-anim:not(.visible)');
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, 100 + (index * 75)); // Staggered delay
        });

        // 2. Scroll-triggered animations (Below the fold)
        const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.visible)');
        if (revealElements.length > 0) {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.15
            };

            const revealObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => revealObserver.observe(el));
        }
    }

});
