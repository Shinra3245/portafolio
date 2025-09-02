class SimpleProjectSlider {
    constructor() {
        this.slider = document.querySelector('.slider-wrapper');
        this.slides = document.querySelectorAll('.project-slide');
        this.dots = document.querySelectorAll('.nav-dot');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');

        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isMobile = window.innerWidth <= 768;
        this.isSmallMobile = window.innerWidth <= 400;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSlider();
        this.updateNavigation();


        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            const wasSmallMobile = this.isSmallMobile;

            this.isMobile = window.innerWidth <= 768;
            this.isSmallMobile = window.innerWidth <= 400;


            if (wasMobile !== this.isMobile || wasSmallMobile !== this.isSmallMobile) {
                this.currentSlide = Math.min(this.currentSlide, this.totalSlides - 1);
                this.updateSlider();
                this.updateNavigation();
            }
        });
    }

    updateSlider() {
        if (!this.slider) return;

        let translateX;


        if (this.isMobile) {

            translateX = -this.currentSlide * 25;
        } else {

            translateX = -this.currentSlide * 100;
        }

        this.slider.style.transform = `translateX(${translateX}%)`;
        this.slider.style.transition = 'transform 0.3s ease';
    }


    setupEventListeners() {

        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToPrevSlide();
            });

            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToNextSlide();
            });
        }


        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToSlide(index);
            });
        });


        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.goToPrevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.goToNextSlide();
            }
        });


        this.setupTouchEvents();


        const buttons = document.querySelectorAll('.btn-ver-pagina, .btn-secondary, .btn-access, .project-image');
        buttons.forEach(button => {
            button.addEventListener('mousedown', (e) => e.stopPropagation());
            button.addEventListener('touchstart', (e) => e.stopPropagation());
            button.addEventListener('click', (e) => e.stopPropagation());
        });
    }

    goToSlide(index) {

        if (index < 0) {
            index = this.totalSlides - 1;
        } else if (index >= this.totalSlides) {
            index = 0;
        }

        this.currentSlide = index;
        this.updateSlider();
        this.updateNavigation();
    }

    goToNextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    goToPrevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    updateNavigation() {

        this.dots.forEach((dot, index) => {
            if (dot) {
                dot.classList.toggle('active', index === this.currentSlide);
            }
        });


        if (this.prevBtn) {
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.pointerEvents = 'auto';
        }

        if (this.nextBtn) {
            this.nextBtn.style.opacity = '1';
            this.nextBtn.style.pointerEvents = 'auto';
        }
    }


    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let isDragging = false;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
        }, { passive: true });

        this.slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;

            const currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
            const diffY = Math.abs(startY - e.touches[0].clientY);


            if (Math.abs(diffX) > diffY) {
                e.preventDefault();
            }
        }, { passive: false });

        this.slider.addEventListener('touchend', (e) => {
            if (!isDragging) return;

            endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            const diffY = Math.abs(startY - e.changedTouches[0].clientY);

            isDragging = false;


            if (Math.abs(diffX) > diffY && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.goToNextSlide();
                } else {
                    this.goToPrevSlide();
                }
            }
        }, { passive: true });
    }

    goToSlide(index) {

        if (index < 0) {
            index = this.totalSlides - 1;
        } else if (index >= this.totalSlides) {
            index = 0;
        }

        this.currentSlide = index;
        this.updateSlider();
        this.updateNavigation();
    }

    goToNextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    goToPrevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    updateSlider() {
        if (!this.slider) return;

        let translateX;


        if (this.isMobile) {

            translateX = -this.currentSlide * 25;
        } else {

            translateX = -this.currentSlide * 100;
        }

        this.slider.style.transform = `translateX(${translateX}%)`;
        this.slider.style.transition = 'transform 0.3s ease';
    }


    init() {
        this.setupEventListeners();
        this.updateSlider();
        this.updateNavigation();


        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 768;


            if (wasMobile !== this.isMobile) {

                this.currentSlide = Math.min(this.currentSlide, this.totalSlides - 1);
                this.updateSlider();
                this.updateNavigation();
            }
        });
    }

    updateNavigation() {

        this.dots.forEach((dot, index) => {
            if (dot) {
                dot.classList.toggle('active', index === this.currentSlide);
            }
        });


        if (this.prevBtn) {
            this.prevBtn.style.opacity = '1';
            this.prevBtn.style.pointerEvents = 'auto';
        }

        if (this.nextBtn) {
            this.nextBtn.style.opacity = '1';
            this.nextBtn.style.pointerEvents = 'auto';
        }
    }


    stopTransition() {
        if (this.slider) {
            this.slider.style.transition = 'none';
        }
    }


    resumeTransition() {
        if (this.slider) {
            this.slider.style.transition = 'transform 0.3s ease';
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new SimpleProjectSlider();
});