(function () {
    const pages = [
        ['index.html', 'Home'],
        ['about.html', 'About'],
        ['academics.html', 'Academics'],
        // ['admissions.html', 'Admissions'],
        // ['research.html', 'Research'],
        ['campus.html', 'Campus'],
        ['contact.html', 'Contact']
    ];

    const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    function buildHeader() {
        const header = document.createElement('header');
        header.className = 'site-shell site-animate';
        header.innerHTML = `
            <div class="header-inner">
                <a href="index.html" class="site-logo" aria-label="Dreams Group of Colleges home">
                    <img class="site-logo-emblem" src="assets/dreams-logo-white.png" alt="Dreams logo">
                    <span>
                        <span class="site-logo-name">Dreams Group of Colleges</span>
                        <span class="site-logo-est">Saharanpur &middot; Uttar Pradesh</span>
                    </span>
                </a>
                <nav aria-label="Primary navigation">
                    <ul>
                        ${pages.map(([href, label]) => `<li><a href="${href}"${href === page ? ' class="active"' : ''}>${label}</a></li>`).join('')}
                    </ul>
                </nav>
            </div>
        `;

        document.querySelectorAll('.topbar').forEach(el => el.remove());
        document.querySelectorAll('body > header').forEach(el => el.remove());
        document.body.prepend(header);
    }

    function buildFooter() {
        const footer = document.createElement('footer');
        footer.className = 'site-shell';
        footer.innerHTML = `
            <div class="container">
                <div class="footer-grid">
                    <div class="site-footer-brand">
                        <div class="site-logo-name">Dreams Group of Colleges</div>
                        <p style="margin: 0; padding: 0;">Affiliated to: Dr. APJ Abdul Kalam Technical University, Lucknow | BTE Lucknow</p>
                        
                        <p style="margin: 0; padding: 0;">Approved By: Pharmacy Council of India, New Delhi</p>
                        <div class="site-footer-contact">
                            Janta Road, Saharanpur, Uttar Pradesh<br>
                            admissions@dreamscollege.in | info@dreamscollege.in
                        </div>
                    </div>
                    <div>
                        <h5>Academics</h5>
                        <ul>
                            <li><a href="academics.html">Programmes</a></li>
                            <li><a href="academics.html">Departments</a></li>
                            <li><a href="academics.html">Training & Placements</a></li>
                            <li><a href="research.html">Research</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="admissions.html">Admissions 2026-27</a></li>
                            <li><a href="campus.html">Campus Life</a></li>
                            <li><a href="about.html">About College</a></li>
                            <li><a href="contact.html">Enquiry Desk</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Institution</h5>
                        <ul>
                            <li><a href="about.html">Vision & Mission</a></li>
                            <li><a href="about.html">Leadership</a></li>
                            <li><a href="research.html">Innovation</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>&copy; 2026 Dreams Group of Colleges. All Rights Reserved.</span>
                    <div class="site-accred">
                        <span>Admissions Open</span>
                        <span>Saharanpur</span>
                        <span>Uttar Pradesh</span>
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll('body > footer').forEach(el => el.remove());
        document.body.appendChild(footer);
    }

    function fixPlaceholderLinks() {
        const map = {
            'academics': 'academics.html',
            'admission': 'admissions.html',
            'apply': 'admissions.html',
            'research': 'research.html',
            'publication': 'research.html',
            'campus': 'campus.html',
            'hostel': 'campus.html',
            'contact': 'contact.html',
            'enquiry': 'contact.html',
            'partner': 'contact.html',
            'home': 'index.html',
            'about': 'about.html'
        };

        document.querySelectorAll('a[href="#"], a[href="portal.html"], a[href="news.html"]').forEach(link => {
            const text = link.textContent.trim().toLowerCase();
            const target = Object.keys(map).find(key => text.includes(key));
            link.href = target ? map[target] : 'contact.html';
        });
    }

    function addRevealAnimations() {
        const blocks = document.querySelectorAll('main > section, body > section, .stats-bar, .ticker-bar');
        blocks.forEach((el, index) => {
            if (!el.classList.contains('hero') && !el.classList.contains('about-hero')) {
                el.classList.add('reveal');
                el.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
            } else {
                el.classList.add('site-animate');
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        requestAnimationFrame(() => document.body.classList.add('site-loaded'));
    }

    document.addEventListener('DOMContentLoaded', () => {
        buildHeader();
        buildFooter();
        fixPlaceholderLinks();
        addRevealAnimations();
    });
})();
