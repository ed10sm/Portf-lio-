document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar nos itens de navegação
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Depoimentos
    const depoimentos = [
        {
            nome: "João Silva",
            cargo: "CEO da Empresa X",
            texto: "Este produto mudou a maneira como fazemos negócios. Altamente recomendado!",
            foto: "https://www.abraseunegocio.com.br/wp-content/uploads/2016/04/noticia_imagem_0809.jpg"
        },
        {
            nome: "Maria Oliveira",
            cargo: "Gerente de Marketing",
            texto: "Incrível! Nos ajudou a aumentar nossas vendas em 50%.",
            foto: "https://via.placeholder.com/150"
        },
        {
            nome: "Carlos Souza",
            cargo: "Desenvolvedor Sênior",
            texto: "Ferramenta essencial para qualquer equipe de desenvolvimento.",
            foto: "https://via.placeholder.com/150"
        }
    ];

    let indiceAtual = 0;

    function atualizarDepoimento() {
        const depoimento = depoimentos[indiceAtual];
        document.querySelector('.nome-depoente').textContent = depoimento.nome;
        document.querySelector('.cargo-depoente').textContent = depoimento.cargo;
        document.querySelector('.texto-depoimento').textContent = depoimento.texto;
        document.querySelector('.foto-depoente').src = depoimento.foto;
    }

    document.getElementById('proximo-depoimento').addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % depoimentos.length;
        atualizarDepoimento();
    });

    atualizarDepoimento(); // Inicializa com o primeiro depoimento
});

// Função para solicitar orçamento
function solicitarOrcamento() {
    alert("Obrigado pelo seu interesse! Por favor, entre em contato pelo email: contato@empresario.com");
}

// Carrossel (se necessário)
let currentIndex = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    const projetos = document.querySelectorAll('.projeto');
    const totalProjetos = projetos.length;

    currentIndex = (currentIndex + direction + totalProjetos) % totalProjetos;
    const offset = -currentIndex * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
}

// Função toggleMenu (se necessário)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}