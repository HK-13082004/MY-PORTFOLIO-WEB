document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // Scroll Reveal Animation (Intersection Observer)
    // -------------------------------------------------------------
    const revealSections = document.querySelectorAll('.section-reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

    // -------------------------------------------------------------
    // Sticky Header Scroll Effect
    // -------------------------------------------------------------
    const header = document.querySelector('.header');
    
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.75rem 0';
            header.style.background = 'rgba(7, 9, 19, 0.85)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.background = 'rgba(7, 9, 19, 0.65)';
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // -------------------------------------------------------------
    // Smooth Anchor Navigation Scrolling
    // -------------------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-links a, .hero-actions a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // -------------------------------------------------------------
    // Console Greeting log
    // -------------------------------------------------------------
    console.log(
        '%cHello, Welcome to Hemant Kumar\'s Portfolio! 🚀',
        'color: #06b6d4; font-family: sans-serif; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px rgba(6, 182, 212, 0.3);'
    );
});