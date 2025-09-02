// js/alert-toast.js
window.addEventListener('load', function () {

    setTimeout(function () {


        const progressElements = document.querySelectorAll('.progress-percentage');
        progressElements.forEach(function (element) {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            element.style.transform = 'scale(1)';
        });

        const toastButton = document.getElementById('show-info-toast');
        if (toastButton) {
            toastButton.addEventListener('click', function () {
                const message = getTranslation('toastAnimationMessage');

                showToast.success(message, {
                    duration: 4000,
                    progress: true,
                    position: 'top-center',
                    transition: 'popUp',
                    icon: '',
                    sound: true
                });
            });
        }

    }, 100);
});


function protectProgressBars() {
    const progressBars = document.querySelectorAll('.progress-percentage');
    progressBars.forEach(function (bar) {
        bar.style.setProperty('opacity', '1', 'important');
        bar.style.setProperty('visibility', 'visible', 'important');
        bar.style.setProperty('transform', 'scale(1)', 'important');
    });
}