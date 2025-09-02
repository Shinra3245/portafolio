
function animateProgressCounter(progressBar, percentageElement, targetValue) {
    let currentValue = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);

    function updateProgress() {
        currentValue += increment;

        if (currentValue < targetValue) {

            percentageElement.textContent = Math.floor(currentValue) + '%';


            progressBar.style.width = currentValue + '%';


            requestAnimationFrame(updateProgress);
        } else {

            percentageElement.textContent = targetValue + '%';
            progressBar.style.width = targetValue + '%';


            progressBar.classList.add('complete');


            percentageElement.classList.add('visible');
        }
    }


    updateProgress();
}


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
};


const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItem = entry.target;
            const progressBar = skillItem.querySelector('.progress-bar');
            const percentageElement = skillItem.querySelector('.progress-percentage');


            const targetProgress = parseInt(progressBar.getAttribute('data-progress'));


            percentageElement.classList.add('visible');


            setTimeout(() => {
                animateProgressCounter(progressBar, percentageElement, targetProgress);
            }, 300);


            skillObserver.unobserve(skillItem);
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', () => {

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
});


function startAllAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
        const progressBar = item.querySelector('.progress-bar');
        const percentageElement = item.querySelector('.progress-percentage');
        const targetProgress = parseInt(progressBar.getAttribute('data-progress'));

        setTimeout(() => {
            percentageElement.classList.add('visible');
            animateProgressCounter(progressBar, percentageElement, targetProgress);
        }, index * 200);
    });
}
