document.addEventListener('DOMContentLoaded', () => {
    
    // --- ROLAGEM SUAVE AO CLICAR NOS LINKS DO MENU ---
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- ANIMAÇÃO DE APARECIMENTO DAS SEÇÕES AO ROLAR A PÁGINA ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // O CÓDIGO DO CARROSSEL FOI REMOVIDO POIS NÃO É MAIS UTILIZADO.

});