function telaInicial1() {}

function telaInicial2() {}

function telaCriacaoQuizz(tela) {
  const conteudo_tela = document.querySelector(".home-page");
  if (tela === 1) {
    conteudo_tela.innerHTML = criaQuizzPagina1;
  }

  if (tela === 3) {
    conteudo_tela.innerHTML = criaQuizzPagina3;
  }
}
let titulo_quizz;
let url_img_quizz;
let qtd_perguntas;
let qtd_niveis;

function testaParametrosIniciais() {
  // obtem parâmetros dos inputs
  titulo = document.querySelector("#titulo_quizz").value;
  url = document.querySelector("#url_img_quizz").value;
  qtd_perguntas = document.querySelector("#qtd-perguntas").value;
  qtd_niveis = document.querySelector("#qtd-niveis").value;
  // verifica validade dos parâmetros
  const titulo_valido = titulo.length >= 20 && titulo.length <= 65;
  const url_valido = checkUrl(url);
  const qtd_perguntas_valido = qtd_perguntas >= 3;
  const qtd_niveis_valido = qtd_niveis >= 2;

  if (
    titulo_valido &&
    url_valido &&
    qtd_perguntas_valido &&
    qtd_niveis_valido
  ) {
    // AQUI DEVE SER CHAMADA A FUNÇÃO QUE CARREGA A PÁGINA 2 DE CRIAÇÃO DO QUIZZ
    telaCriacaoQuizz(3);
  } else {
    alert("Os parâmetros digitados não são válidos!");
  }
}

// Função que checa a validade de uma url
function checkUrl(string) {
  try {
    let url = new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

function selecionaNivel(element) {
  const parentNode = element.parentNode;
  const childNode = parentNode.childNodes[3]; // acessa a div container
  childNode.classList.toggle("escondido");
}
