// common.js - Updated Social Media Icons with WhatsApp

(function () {
    const pages = [
        ['index.html', 'Home'],
        ['about.html', 'About'],
        ['academics.html', 'Academics'],
        ['admissions.html', 'Admissions'],
        ['research.html', 'Research'],
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
                        <li><a href="index.html"${page === 'index.html' ? ' class="active"' : ''}>Home</a></li>
                        <li><a href="about.html"${page === 'about.html' ? ' class="active"' : ''}>About</a></li>
                        
                        <!-- ACADEMICS DROPDOWN -->
                        <li class="dropdown">
                            <a href="academics.html"${page === 'academics.html' ? ' class="active"' : ''}>Academics</a>
                            <div class="dropdown-content">
                                <a href="syllabus.html">Syllabus Download</a>
                                <a href="bca.html">Computer Applications (BCA)</a>
                                <a href="bba.html">Management Studies (BBA)</a>
                                <a href="bcom.html">Commerce &amp; Finance (B.Com)</a>
                                <a href="ba.html">Arts &amp; Humanities (B.A.)</a>
                                <a href="bpharma.html">Pharmacy (B.Pharma)</a>
                                <a href="dpharma.html">Pharmacy (D.Pharma)</a>
                                <a href="bed.html">Teacher Education (B.Ed.)</a>
                                <a href="d_el_ed.html">Teacher Education (D.El.Ed.)</a>
                                <a href="polytechnic.html">Engineering &amp; Polytechnic</a>
                            </div>
                        </li>
                        
                        <!-- ADMISSIONS DROPDOWN -->
                        <li class="dropdown">
                            <a href="admissions.html"${page === 'admissions.html' ? ' class="active"' : ''}>Admissions</a>
                            <div class="dropdown-content">
                                <a href="bca.html">Bachelor of Computer Applications (BCA)</a>
                                <a href="bba.html">Bachelor of Business Administration (BBA)</a>
                                <a href="bcom.html">Bachelor of Commerce (B.Com)</a>
                                <a href="ba.html">Bachelor of Arts (B.A.)</a>
                                <a href="bpharma.html">Bachelor of Pharmacy (B.Pharma)</a>
                                <a href="dpharma.html">Diploma in Pharmacy (D.Pharma)</a>
                                <a href="bed.html">Bachelor of Education (B.Ed.)</a>
                                <a href="d_el_ed.html">Diploma in Elementary Education (D.El.Ed.)</a>
                                <a href="polytechnic.html">Diploma in Engineering (Polytechnic)</a>
                            </div>
                        </li>
                        
                       
                        <li><a href="campus.html"${page === 'campus.html' ? ' class="active"' : ''}>Campus</a></li>
                        <li><a href="contact.html"${page === 'contact.html' ? ' class="active"' : ''}>Contact</a></li>
                    </ul>
                </nav>
                <div class="site-header-cta">
                    <a href="admissions.html" class="site-btn-outline">Apply Now</a>
                    <a href="https://www.merashikshasahayak.in" class="site-btn-fill">Login</a>
                </div>
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
                        <div class="site-logo-name" style="margin-top: 10px;">Dreams Group of Colleges | Code: 146</div>
                        <p style="margin: 0; padding: 0; font-size: 12px;">Affiliated to: AKTU, Lucknow | BTE Lucknow | M.S.U. Saharanpur <br>S.C.E.R.T Allahabad | NCTE Jaipur</p>
                        <hr>
                        <div class="site-logo-name" style="margin-top: 10px;">Dreams College of Polytechnic | Code: 1565</div>
                        <p style="margin: 0; padding: 0; font-size: 12px;">Affiliated to: B.T.E. Lucknow | Approved by: AICTE</p>
                        <hr>
                        <div class="site-logo-name" style="margin-top: 10px;">Dreams College of Pharmacy | Code: 1268</div>
                        <p style="margin: 0; padding: 0; font-size: 12px;">Affiliated to: A.K.T.U Lucknow, Approved By: AICTE & PCI, New Delhi</p>
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
                            <li><a href="syllabus.html">Syllabus</a></li>
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
                        <span>Powered by <a href="https://www.merashikshasahayak.com/">MSS</a></span>
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

    // ─── SOCIAL MEDIA ICONS (fixed right side) ───
    function addSocialMediaIcons() {
        // Remove any existing container to avoid duplicates
        const existing = document.getElementById('social-media-rail');
        if (existing) existing.remove();

        const rail = document.createElement('div');
        rail.id = 'social-media-rail';
        rail.setAttribute('aria-label', 'Social media links');
        rail.style.cssText = `
            position: fixed;
            right: 1.2rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            z-index: 9999;
            background: rgba(11, 31, 58, 0.75);
            backdrop-filter: blur(4px);
            padding: 0.6rem 0.4rem;
            border-radius: 40px;
            border: 1px solid rgba(201, 168, 76, 0.3);
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
            transition: opacity 0.3s ease, transform 0.3s ease;
        `;

        // ─── WHATSAPP NUMBER (Change this to your college's WhatsApp number) ───
        const WHATSAPP_NUMBER = '919999999999'; // Format: Country code + Number (no + sign)
        // Example: For +91 9876543210, use '919876543210'

        // ─── SOCIAL MEDIA ICONS (latest brand icons) ───
        const socials = [
            { 
                name: 'Facebook', 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
                url: 'https://facebook.com/dreamscollege' 
            },
            { 
                name: 'Instagram', 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
                url: 'https://instagram.com/dreamscollege' 
            },
            { 
                name: 'YouTube', 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
                url: 'https://youtube.com/dreamscollege' 
            },
            { 
                name: 'Twitter / X', 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
                url: 'https://twitter.com/dreamscollege' 
            },
            { 
                name: 'LinkedIn', 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
                url: 'https://linkedin.com/school/dreamscollege' 
            },
            { 
                name: 'WhatsApp', 
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
                url: `https://wa.me/${919997604604}`,
                isWhatsApp: true
            }
        ];

        socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', s.name);
            
            // WhatsApp specific styling
            if (s.isWhatsApp) {
                a.style.cssText = `
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(37, 211, 102, 0.15);
                    color: #25D366;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
                    border: 1px solid rgba(37, 211, 102, 0.3);
                `;
                // Green WhatsApp glow on hover
                a.addEventListener('mouseenter', function(e) {
                    this.style.background = 'rgba(37, 211, 102, 0.25)';
                    this.style.transform = 'scale(1.1)';
                    this.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.3)';
                    this.style.borderColor = '#25D366';
                });
                a.addEventListener('mouseleave', function(e) {
                    this.style.background = 'rgba(37, 211, 102, 0.15)';
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = 'none';
                    this.style.borderColor = 'rgba(37, 211, 102, 0.3)';
                });
            } else {
                a.style.cssText = `
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    color: #e8c76e;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
                    border: 1px solid rgba(201, 168, 76, 0.15);
                `;
                a.addEventListener('mouseenter', function(e) {
                    this.style.background = 'rgba(201, 168, 76, 0.2)';
                    this.style.transform = 'scale(1.1)';
                    this.style.boxShadow = '0 0 16px rgba(201, 168, 76, 0.3)';
                    this.style.borderColor = '#c9a84c';
                });
                a.addEventListener('mouseleave', function(e) {
                    this.style.background = 'rgba(255,255,255,0.05)';
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = 'none';
                    this.style.borderColor = 'rgba(201, 168, 76, 0.15)';
                });
            }

            a.innerHTML = s.icon;
            rail.appendChild(a);
        });

        document.body.appendChild(rail);

        // Optional: hide on very small screens
        const mediaQuery = window.matchMedia('(max-width: 480px)');
        function handleMobile(e) {
            if (e.matches) {
                rail.style.display = 'none';
            } else {
                rail.style.display = 'flex';
            }
        }
        mediaQuery.addEventListener('change', handleMobile);
        handleMobile(mediaQuery);
    }

    // ─── PAGE LOAD DETECTION ───
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                buildHeader();
                buildFooter();
                fixPlaceholderLinks();
                addRevealAnimations();
                addSocialMediaIcons();
            });
        } else {
            buildHeader();
            buildFooter();
            fixPlaceholderLinks();
            addRevealAnimations();
            addSocialMediaIcons();
        }
    }

    // Also re-add when page changes (for SPAs)
    if (window.history && window.history.pushState) {
        const originalPush = window.history.pushState;
        window.history.pushState = function() {
            originalPush.apply(this, arguments);
            setTimeout(() => {
                buildHeader();
                buildFooter();
                fixPlaceholderLinks();
                addRevealAnimations();
                addSocialMediaIcons();
            }, 300);
        };
    }

    // Watch for body changes
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            for (let m of mutations) {
                if (m.type === 'childList' && m.addedNodes.length > 0) {
                    for (let node of m.addedNodes) {
                        if (node.nodeType === 1 && (node.matches('header') || node.matches('footer'))) {
                            setTimeout(() => {
                                addSocialMediaIcons();
                            }, 200);
                            break;
                        }
                    }
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Start
    init();

})();