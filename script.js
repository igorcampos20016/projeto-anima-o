// Declara um array contendo objetos de carros com nome, imagem e descrição
var carros = [
    { 
        nome: 'Porsche 911', 
        imagem: './img/1.png', 
        descricao: 'O Porsche 911 é um dos carros esportivos mais emblemáticos do mundo. Lançado em 1964, combina desempenho impressionante com design icônico.' 
    },
    { 
        nome: 'Ferrari', 
        imagem: './img/2.png', 
        descricao: 'A Ferrari é sinônimo de luxo e velocidade. Seus carros são projetados para oferecer o máximo desempenho nas pistas e nas ruas.' 
    },
    { 
        nome: 'Lamborghini', 
        imagem: './img/3.png', 
        descricao: 'A Lamborghini se destaca pelo design agressivo e motores potentes. Cada modelo é uma obra-prima da engenharia automotiva.' 
    },
    { 
        nome: 'Camaro', 
        imagem: './img/4.png', 
        descricao: 'O Chevrolet Camaro é um muscle car icônico, conhecido por seu motor potente e design robusto, trazendo emoção e adrenalina ao dirigir.' 
    }
       
];

// Variável para armazenar o índice do carro atual
var indiceAtual = 0;

// Função para mudar o carro ao clicar nos botões
function mudarCarro(direcao) {
    // Atualiza o índice do carro com base na direção passada como argumento (1 para frente, -1 para trás)
    indiceAtual += direcao;

    // Se o índice for menor que 0, volta para o último carro da lista
    if (indiceAtual < 0) {
        indiceAtual = carros.length - 1;
    } 
    // Se o índice ultrapassar o número total de carros, volta para o primeiro carro
    else if (indiceAtual >= carros.length) {
        indiceAtual = 0;
    }

    // Atualiza os elementos HTML com as informações do carro selecionado
    document.getElementById('car-name').textContent = carros[indiceAtual].nome; 
    document.getElementById('car-image').src = carros[indiceAtual].imagem; 
    document.getElementById('car-description').textContent = carros[indiceAtual].descricao;
}

// Exibir o primeiro carro ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    mudarCarro(0);
});
