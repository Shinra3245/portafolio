function createParticlesInSection(sectionId) {
    const container = document.getElementById(sectionId);
    const particleCount = 50; 
    const colors = ['particle-primary', 'particle-secondary', 'particle-accent'];
    const containerWidth = container.offsetWidth; 
    const containerHeight = container.offsetHeight; 

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${colors[i % colors.length]}`;
        
        
        const randomX = Math.random() * (containerWidth - 20); 
        const randomY = Math.random() * (containerHeight - 20); 

        particle.style.left = randomX + 'px';
        particle.style.top = randomY + 'px';

        
        particle.style.animationDelay = '0s'; 
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'; 

        container.appendChild(particle);
    }
}


window.addEventListener('DOMContentLoaded', function() {
    createParticlesInSection('particles-section-1');
    createParticlesInSection('particles-section-2');
    createParticlesInSection('particles-section-3');
    createParticlesInSection('particles-section-4');
    createParticlesInSection('particles-section-5');
    createParticlesInSection('particles-section-6');
    createParticlesInSection('particles-section-7');
    createParticlesInSection('particles-section-8');
});
