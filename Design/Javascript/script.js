// Lógica para o carrossel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
    currentIndex = (index + totalImages) % totalImages;

    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
    });
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}


const perguntas = [
    {
        pergunta: "Quem é considerada a primeira programadora da história?",
        opcoes: ["Ada Lovelace", "Alan Turing", "Grace Hopper"],
        resposta_correta: "Ada Lovelace"
    },
    {
        pergunta: "Com quem Ada Lovelace colaborou em seu trabalho mais conhecido?",
        opcoes: ["Alan Turing", "Charles Babbage", "Marie Curie"],
        resposta_correta: "Charles Babbage"
    },
    {
        pergunta: "Qual é o principal legado de Ada Lovelace no campo da computação?",
        opcoes: ["Desenvolvimento de jogos de computador", "Invenção do primeiro computador eletrônico", "Elaboração do primeiro algoritmo para processamento por uma máquina"],
        resposta_correta: "Elaboração do primeiro algoritmo para processamento por uma máquina"
    },
    {
        pergunta: "O que é a Máquina Analítica de Babbage?",
        opcoes: ["Um instrumento musical", "Um dispositivo de cálculo mecânico", "Um telescópio avançado"],
        resposta_correta: "Um dispositivo de cálculo mecânico"
    },
    {
        pergunta: "Ada Lovelace é frequentemente chamada de...",
        opcoes: ["A mãe da matemática", "A primeira programadora", "A rainha da ciência"],
        resposta_correta: "A primeira programadora"
    },
];

let pontuacao = 0;
let perguntaAtual = 0;

function exibirPergunta() {
    const perguntaElemento = document.getElementById("pergunta");
    const opcoesElemento = document.getElementById("opcoes");

    perguntaElemento.textContent = perguntas[perguntaAtual].pergunta;
    opcoesElemento.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {
        const opcaoElemento = document.createElement("div");
        opcaoElemento.textContent = `${index + 1}. ${opcao}`;
        opcoesElemento.appendChild(opcaoElemento);
    });
}

function verificarResposta() {
    const respostaUsuario = prompt("Digite o número da sua resposta:");
    const respostaCorreta = perguntas[perguntaAtual].resposta_correta;

    if (respostaUsuario !== null) {
        const respostaUsuarioIndex = parseInt(respostaUsuario) - 1;

        if (
            respostaUsuarioIndex >= 0 &&
            respostaUsuarioIndex < perguntas[perguntaAtual].opcoes.length
        ) {
            const opcaoEscolhida = perguntas[perguntaAtual].opcoes[respostaUsuarioIndex];

            if (opcaoEscolhida.toLowerCase() === respostaCorreta.toLowerCase()) {
                pontuacao++;
                document.getElementById("resultado").textContent = "Correto!";
            } else {
                document.getElementById("resultado").textContent = `Incorreto. A resposta correta era: ${respostaCorreta}`;
            }

            perguntaAtual++;

            if (perguntaAtual < perguntas.length) {
                exibirPergunta();
            } else {
                exibirResultadoFinal();
            }
        } else {
            alert("Por favor, digite um número válido.");
        }
    } else {
        alert("Quiz cancelado. Atualize a página para jogar novamente.");
    }
}

function exibirResultadoFinal() {
    const resultadoFinalElemento = document.getElementById("quiz-container");
    resultadoFinalElemento.innerHTML = `
      <h1>Pontuação Final</h1>
      <p>Você fez ${pontuacao} de ${perguntas.length} perguntas corretamente.</p>
    `;
}

exibirPergunta();


document.getElementById('carouselSite').addEventListener('swiped-left', nextImage);
document.getElementById('carouselSite').addEventListener('swiped-right', prevImage);

  

