function telaInicial1() {}

function telaInicial2() {}

function telaCriacaoQuizz(tela) {
  const conteudo_tela = document.querySelector(".home-page");
  if (tela === 1) {
    conteudo_tela.innerHTML = `<div class="new-quizz">  
    <h4>Comece pelo começo</h4>
    <form class="form-quizz1">
        <div class="inputs-container">
            <input type="text" id="titulo" name="titulo" minlength="20" maxlength="65" placeholder="Título do seu quizz" required>
            <input type="url" id="url" name="url" placeholder="URL da imagem do seu quizz" required>
            <input type="number" id="qtd-perguntas" name="qtd-perguntas" min="3" placeholder="Quantidade de perguntas do quizz" required>
            <input type="number" id="qtd-niveis" name="qtd-niveis" min="2" placeholder="Quantidade de níveis do quizz" required>
        </div>
        <button onclick="teste()">Prosseguir para criar perguntas</button>
    </form>`;
  }

  // if (tela === 3) {
  //   conteudo_tela.innerHTML =
  // }
}

function teste() {
  // obtem parâmetros dos inputs
  const titulo = document.querySelector("#titulo").value;
  const url = document.querySelector("#url").value;
  const qtd_perguntas = document.querySelector("#qtd-perguntas").value;
  const qtd_niveis = document.querySelector("#qtd-niveis").value;
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
    console.log("todos os parâmetros são válidos");
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
