document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA PARA O MENU HAMBÚRGUER ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeMenuBtn = document.querySelector('.close-menu');
    const allNavLinks = document.querySelectorAll('.nav-links li a'); // Todos os links dentro do menu

    // Abre o menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    // Fecha o menu pelo botão 'X'
    closeMenuBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Fecha o menu ao clicar em um link
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // --- ROLAGEM SUAVE AO CLICAR NOS LINKS DO MENU ---
    // (O seletor 'nav a' funciona tanto para desktop quanto para mobile)
    const smoothScrollLinks = document.querySelectorAll('nav a');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            // Verifica se o link é o do logo (href="#home") ou outros
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    
                    // Calcula o offset do header (para não rolar para trás do header fixo)
                    const headerOffset = document.querySelector('header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
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

});