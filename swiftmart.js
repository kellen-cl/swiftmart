        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Slideshow
        let slideIndex = 0;
        function showSlides() {
            const slides = document.querySelectorAll('.slide');
            slides.forEach(slide => slide.classList.remove('active'));
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].classList.add('active');
            setTimeout(showSlides, 4000);
        }
        showSlides();


        window.addEventListener('scroll', () => {
            const scrollTop = document.querySelector('.scroll-top');
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('show');
            } else {
                scrollTop.classList.remove('show');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });

        // Contact Form 
        function handleSubmit(e) {
            e.preventDefault();
            alert('Thank you for contacting SwiftMart! We\'ll get back to you soon.');
            e.target.reset();
        }

        // FAQ 
        function searchFAQs(query) {
            const faqItems = document.querySelectorAll('.faq-item');
            query = query.toLowerCase();
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(query) || answer.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = query === '' ? 'block' : 'none';
                }
            });
        }

        //  Timer 
        function updateTimers() {
            document.querySelectorAll('.countdown-timer').forEach(timer => {
                const seconds = timer.querySelector('.time-unit:last-child .number');
                if (seconds) {
                    let currentSeconds = parseInt(seconds.textContent);
                    currentSeconds = (currentSeconds - 1 + 60) % 60;
                    seconds.textContent = currentSeconds.toString().padStart(2, '0');
                }
            });
        }
        setInterval(updateTimers, 1000);

        //  Nav Links
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });