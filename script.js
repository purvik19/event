  // Preloader
        window.addEventListener('load', () => {
            const preloader = document.querySelector('.preloader');
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });

        // Mobile Menu Toggle
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Scroll Reveal Animation
        const animateOnScroll = () => {
            const sections = document.querySelectorAll('section');
            const backToTop = document.querySelector('.back-to-top');
            
            // Show/hide back to top button
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
            
            // Header hide/show on scroll
            const header = document.getElementById('header');
            let lastScroll = 0;
            
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll <= 0) {
                    header.classList.remove('hide');
                    return;
                }
                
                if (currentScroll > lastScroll && !header.classList.contains('hide')) {
                    header.classList.add('hide');
                } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
                    header.classList.remove('hide');
                }
                
                lastScroll = currentScroll;
            });
            
            // Section animation
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;
                
                if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
                    section.classList.add('show');
                    
                    // Animate child elements with delay
                    const serviceCards = section.querySelectorAll('.service-card');
                    const galleryItems = section.querySelectorAll('.gallery-item');
                    const testimonialCards = section.querySelectorAll('.testimonial-card');
                    const contactItems = section.querySelectorAll('.contact-item');
                    const socialLinks = section.querySelectorAll('.social-links a');
                    
                    if (serviceCards.length > 0) {
                        serviceCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('show');
                            }, index * 200);
                        });
                    }
                    
                    if (galleryItems.length > 0) {
                        galleryItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('show');
                            }, index * 100);
                        });
                    }
                    
                    if (testimonialCards.length > 0) {
                        testimonialCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('show');
                            }, index * 200);
                        });
                    }
                    
                    if (contactItems.length > 0) {
                        contactItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('show');
                            }, index * 200);
                        });
                    }
                    
                    if (socialLinks.length > 0) {
                        socialLinks.forEach(link => {
                            link.classList.add('show');
                        });
                    }
                }
            });
        };

        // Run on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
 