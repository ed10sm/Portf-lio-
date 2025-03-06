function solicitarOrcamento() {
    alert("Obrigado pelo seu interesse! Por favor, entre em contato pelo email: contato@empresario.com");
}

let currentIndex = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    const projetos = document.querySelectorAll('.projeto');
    const totalProjetos = projetos.length;

    currentIndex = (currentIndex + direction + totalProjetos) % totalProjetos;
    const offset = -currentIndex * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
}

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em um item de navegação
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('active');
    });
});

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

<script>
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () = {
        navLinks.classList.toggle('active')
    })
</script>
