function telaCriacaoQuizz(tela) {
  let conteudo_tela = document.querySelector(".current-page");
  conteudo_tela.innerHTML = "";
  if (tela === 1) {
    conteudo_tela.innerHTML = criaQuizzPagina1;
  }

  if (tela === 2) {
    conteudo_tela.innerHTML = pag2();
  }

  if (tela === 3) {
    conteudo_tela.innerHTML = pag3();
  }

  if (tela === 4) {
    conteudo_tela.innerHTML = pag4();
  }
}
let titulo_quizz;
let url_quizz;
let qtd_perguntas;
let qtd_niveis;

function testaParametrosPag1() {
  // obtem parâmetros dos inputs
  titulo_quizz = document.querySelector("#titulo-quizz").value;
  url_quizz = document.querySelector("#url-img-quizz").value;
  qtd_perguntas = document.querySelector("#qtd-perguntas").value;
  qtd_niveis = document.querySelector("#qtd-niveis").value;
  // verifica validade dos parâmetros
  const titulo_valido = titulo_quizz.length >= 20 && titulo_quizz.length <= 65;
  const url_valido = checkUrl(url_quizz);
  const qtd_perguntas_valido = qtd_perguntas >= 3;
  const qtd_niveis_valido = qtd_niveis >= 2;

  // Bônus dos inputs errados
  if (!titulo_valido) {
    document.querySelector("#erro-titulo-quizz").innerHTML =
      "O título do quizz deve ter entre 20 e 65 caracteres";
    document.querySelector("input#titulo-quizz").classList.add("wrong-input");
  } else {
    document.querySelector("#erro-titulo-quizz").innerHTML = "";
    document
      .querySelector("input#titulo-quizz")
      .classList.remove("wrong-input");
  }
  if (!url_valido) {
    document.querySelector("#erro-url-quizz").innerHTML =
      "O valor informado não é uma url válida";
    document.querySelector("input#url-img-quizz").classList.add("wrong-input");
  } else {
    document.querySelector("#erro-url-quizz").innerHTML = "";
    document
      .querySelector("input#url-img-quizz")
      .classList.remove("wrong-input");
  }
  if (!qtd_perguntas_valido) {
    document.querySelector("#erro-qtd-perguntas-quizz").innerHTML =
      "O quizz deve ter no mínimo 3 perguntas";
    document.querySelector("input#qtd-perguntas").classList.add("wrong-input");
  } else {
    document.querySelector("#erro-qtd-perguntas-quizz").innerHTML = "";
    document
      .querySelector("input#qtd-perguntas")
      .classList.remove("wrong-input");
  }
  if (!qtd_niveis_valido) {
    document.querySelector("#erro-qtd-niveis-quizz").innerHTML =
      "O quizz deve ter no mínimo 2 niveis";
    document.querySelector("input#qtd-niveis").classList.add("wrong-input");
  } else {
    document.querySelector("#erro-qtd-niveis-quizz").innerHTML = "";
    document.querySelector("input#qtd-niveis").classList.remove("wrong-input");
  }

  if (
    titulo_valido &&
    url_valido &&
    qtd_perguntas_valido &&
    qtd_niveis_valido
  ) {
    quizz_usuario = {
      title: document.querySelector(`#titulo-quizz`).value,
      image: document.querySelector(`#url-img-quizz`).value,
      questions: "",
      levels: "",
    };
    telaCriacaoQuizz(2);
  } else {
    alert("Os parâmetros digitados não são válidos!");
  }
}

function testaParametrosPag2() {
  let perguntas = [];
  let cores = [];
  let respostas_corretas = [];
  let respostas_incorretas = [];
  let imgs_corretas = [];
  let imgs_incorretas = [];
  let wrong_answers = [[]];
  let wrong_imgs = [[]];
  for (i = 1; i < qtd_perguntas; i++) {
    wrong_answers.push([]);
    wrong_imgs.push([]);
  }
  for (i = 0; i < qtd_perguntas; i++) {
    perguntas.push(document.querySelector(`#texto-pergunta${i + 1}`).value);
    cores.push(document.querySelector(`#cor-pergunta${i + 1}`).value);
    respostas_corretas.push(
      document.querySelector(`#resposta-correta${i + 1}`).value
    );
    respostas_incorretas.push(
      document.querySelector(`#resposta-incorreta${i + 1}-1`).value
    );
    wrong_answers[i].push(
      document.querySelector(`#resposta-incorreta${i + 1}-1`).value
    );
    respostas_incorretas.push(
      document.querySelector(`#resposta-incorreta${i + 1}-2`).value
    );
    wrong_answers[i].push(
      document.querySelector(`#resposta-incorreta${i + 1}-2`).value
    );
    respostas_incorretas.push(
      document.querySelector(`#resposta-incorreta${i + 1}-3`).value
    );
    wrong_answers[i].push(
      document.querySelector(`#resposta-incorreta${i + 1}-3`).value
    );
    imgs_corretas.push(
      document.querySelector(`#url-img-correta${i + 1}`).value
    );

    imgs_incorretas.push(
      document.querySelector(`#url-img-incorreta${i + 1}-1`).value
    );
    wrong_imgs[i].push(
      document.querySelector(`#url-img-incorreta${i + 1}-1`).value
    );
    wrong_imgs[i].push(
      document.querySelector(`#url-img-incorreta${i + 1}-2`).value
    );
    wrong_imgs[i].push(
      document.querySelector(`#url-img-incorreta${i + 1}-3`).value
    );

    imgs_incorretas.push(
      document.querySelector(`#url-img-incorreta${i + 1}-2`).value
    );
    imgs_incorretas.push(
      document.querySelector(`#url-img-incorreta${i + 1}-3`).value
    );

    // Bônus - testando valores dos inputs
    if (
      (document.querySelector(`#texto-pergunta${i + 1}`).value, length < 20)
    ) {
      document.querySelector(`#erro-texto-pergunta${i + 1}`).innerHTML =
        "A pergunta deve ter pelo menos 20 caracteres";
      document
        .querySelector(`#texto-pergunta${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-texto-pergunta${i + 1}`).innerHTML = "";
      document
        .querySelector(`#texto-pergunta${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (!checaCor(document.querySelector(`#cor-pergunta${i + 1}`).value)) {
      document.querySelector(`#erro-cor-pergunta${i + 1}`).innerHTML =
        "A cor deve estar no formato hexadecimal válido";
      document
        .querySelector(`#cor-pergunta${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-cor-pergunta${i + 1}`).innerHTML = "";
      document
        .querySelector(`#cor-pergunta${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (document.querySelector(`#resposta-correta${i + 1}`).value.length < 1) {
      document.querySelector(`#erro-resposta-correta${i + 1}`).innerHTML =
        "O campo das respostas corretas não pode estar vazio!";
      document
        .querySelector(`#resposta-correta${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-resposta-correta${i + 1}`).innerHTML = "";
      document
        .querySelector(`#resposta-correta${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (
      !checkUrl(document.querySelector(`#url-img-correta${i + 1}`).value.length)
    ) {
      document.querySelector(`#erro-url-correta${i + 1}`).innerHTML =
        "O valor informado não é uma URL válida";
      document
        .querySelector(`#url-img-correta${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-url-correta${i + 1}`).innerHTML = "";
      document
        .querySelector(`#url-img-correta${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (
      document.querySelector(`#resposta-incorreta${i + 1}-1`).value.length < 1
    ) {
      document.querySelector(`#erro-resposta-incorreta${i + 1}`).innerHTML =
        "O campo das respostas incorretas não pode estar vazio!";
      document
        .querySelector(`#resposta-incorreta${i + 1}-1`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-resposta-incorreta${i + 1}`).innerHTML = "";
      document
        .querySelector(`#resposta-incorreta${i + 1}-1`)
        .classList.remove("wrong-input");
    }
    if (
      !checkUrl(
        document.querySelector(`#url-img-incorreta${i + 1}-1`).value.length
      )
    ) {
      document.querySelector(`#erro-url-incorreta${i + 1}`).innerHTML =
        "O valor informado não é uma URL válida";
      document
        .querySelector(`#url-img-incorreta${i + 1}-1`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-url-incorreta${i + 1}`).innerHTML = "";
      document
        .querySelector(`#url-img-incorreta${i + 1}-1`)
        .classList.remove("wrong-input");
    }
  }

  const perguntas_validas = perguntas.filter(function (str) {
    if (str.length >= 20) {
      return true;
    }
  });
  const cores_validas = cores.filter(checaCor);
  const respostas_corretas_validas = respostas_corretas.filter(function (str) {
    if (str.length >= 1) {
      return true;
    }
  });
  const respostas_incorretas_validas = respostas_incorretas.filter(function (
    str
  ) {
    if (str.length >= 1) {
      return true;
    }
  });
  const imgs_corretas_validas = imgs_corretas.filter(checkUrl);
  const imgs_incorretas_validas = imgs_incorretas.filter(checkUrl);

  if (
    perguntas.length === perguntas_validas.length &&
    cores.length === cores_validas.length &&
    respostas_corretas_validas.length >= qtd_perguntas &&
    respostas_incorretas_validas.length >= qtd_perguntas &&
    imgs_corretas_validas.length >= qtd_perguntas &&
    imgs_incorretas_validas.length >= qtd_perguntas
  ) {
    for (i = 0; i < qtd_perguntas; i++) {
      questions[i] = {
        title: document.querySelector(`#texto-pergunta${i + 1}`).value,
        color: document.querySelector(`#cor-pergunta${i + 1}`).value,
        answers: [],
      };
    }

    for (i = 0; i < qtd_perguntas; i++) {
      for (j = 0; j <= qtd_perguntas; j++) {
        if (j === 0) {
          questions[i].answers[j] = {
            text: document.querySelector(`#resposta-correta${i + 1}`).value,
            image: document.querySelector(`#url-img-correta${i + 1}`).value,
            isCorrectAnswer: true,
          };
        } else if (
          wrong_answers[i][j - 1] !== "" &&
          wrong_answers[i][j - 1] !== undefined &&
          wrong_imgs[i][j - 1] !== "" &&
          wrong_imgs[i][j - 1] !== undefined
        ) {
          questions[i].answers[j] = {
            text: wrong_answers[i][j - 1],
            image: wrong_imgs[i][j - 1],
            isCorrectAnswer: false,
          };
        }
      }
    }
    quizz_usuario.questions = questions;
    telaCriacaoQuizz(3);
  } else {
    alert(
      `Por favor, preencha os parâmetros corretamente!\nCada pergunta deve conter pelo menos uma resposta correta e uma incorreta.`
    );
  }
}

function testaParametrosPag3() {
  let titulo_nivel = [];
  let porcentagem = [];
  let url_nivel = [];
  let descricao_nivel = [];

  for (i = 0; i < qtd_niveis; i++) {
    titulo_nivel.push(document.querySelector(`#titulo-nivel${i + 1}`).value);
    porcentagem.push(
      document.querySelector(`#porcentagem-nivel${i + 1}`).value
    );
    url_nivel.push(document.querySelector(`#url-nivel${i + 1}`).value);
    descricao_nivel.push(
      document.querySelector(`#descricao-nivel${i + 1}`).value
    );

    // bônus - testando valores dos inputs
    if ((document.querySelector(`#titulo-nivel${i + 1}`).value, length < 10)) {
      document.querySelector(`#erro-titulo-nivel${i + 1}`).innerHTML =
        "O título do nível deve ter pelo menos 20 caracteres";
      document
        .querySelector(`#titulo-nivel${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-titulo-nivel${i + 1}`).innerHTML = "";
      document
        .querySelector(`#titulo-nivel${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (!checkUrl(document.querySelector(`#url-nivel${i + 1}`))) {
      document.querySelector(`#erro-url-nivel${i + 1}`).innerHTML =
        "O valor informado não é uma url válida";
      document.querySelector(`#url-nivel${i + 1}`).classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-url-nivel${i + 1}`).innerHTML = "";
      document
        .querySelector(`#url-nivel${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (
      document.querySelector(`#porcentagem-nivel${i + 1}`).value < 0 ||
      document.querySelector(`#porcentagem-nivel${i + 1}`).value > 100 ||
      document.querySelector(`#porcentagem-nivel${i + 1}`).value ===
        undefined ||
      document.querySelector(`#porcentagem-nivel${i + 1}`).value === ""
    ) {
      document.querySelector(`#erro-porcentagem-nivel${i + 1}`).innerHTML =
        "A porcentagem deve ser um valor entre 0 e 100";
      document
        .querySelector(`#porcentagem-nivel${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-porcentagem-nivel${i + 1}`).innerHTML = "";
      document
        .querySelector(`#porcentagem-nivel${i + 1}`)
        .classList.remove("wrong-input");
    }
    if (
      (document.querySelector(`#descricao-nivel${i + 1}`).value, length < 30)
    ) {
      document.querySelector(`#erro-descricao-nivel${i + 1}`).innerHTML =
        "A descrição do nível deve possuir pelo menos 30 caracteres";
      document
        .querySelector(`#descricao-nivel${i + 1}`)
        .classList.add("wrong-input");
    } else {
      document.querySelector(`#erro-descricao-nivel${i + 1}`).innerHTML = "";
      document
        .querySelector(`#descricao-nivel${i + 1}`)
        .classList.remove("wrong-input");
    }
  }

  const titulo_nivel_validas = titulo_nivel.filter(function (str) {
    if (str.length >= 10) {
      return true;
    }
  });
  const porcentagem_validas = porcentagem.filter(function (num) {
    if (Number(num) >= 0 && Number(num) <= 100) {
      return true;
    }
  });
  const url_nivel_validas = url_nivel.filter(checkUrl);
  const descricao_nivel_validas = descricao_nivel.filter(function (str) {
    if (str.length >= 30) {
      return true;
    }
  });

  if (
    titulo_nivel.length === titulo_nivel_validas.length &&
    porcentagem.length === porcentagem_validas.length &&
    url_nivel.length === url_nivel_validas.length &&
    descricao_nivel.length === descricao_nivel_validas.length
  ) {
    if (!checaPorcentagens(porcentagem)) {
      alert("Pelo menos um dos níveis deve ter porcentagem mínima de 0!");
      return;
    }
    for (i = 0; i < qtd_niveis; i++) {
      levels[i] = {
        title: String(document.querySelector(`#titulo-nivel${i + 1}`).value),
        image: String(document.querySelector(`#url-nivel${i + 1}`).value),
        text: String(document.querySelector(`#descricao-nivel${i + 1}`).value),
        minValue: String(
          document.querySelector(`#porcentagem-nivel${i + 1}`).value
        ),
      };
    }
    quizz_usuario.levels = levels;
    criaQuizzUsuario();
  } else {
    alert("Por favor, preencha os parâmetros corretamente!");
  }
}

// FUNÇÕES QUE AUXILIAM NA CHECAGEM DE PARÂMETROS
// Função que checa a validade de uma url
function checkUrl(string) {
  try {
    let url = new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

function checaCor(str) {
  if (str[0] !== "#" || str.length !== 7) {
    return;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
          str[i]
        ) < 0
      ) {
        return;
      }
    }
  }
  return true;
}

function checaPorcentagens(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == "0") {
      return true;
    }
  }
}

function selecionaCaixaInput(element) {
  const parentNode = element.parentNode;
  const childNode = parentNode.childNodes[3]; // acessa a div container
  childNode.classList.toggle("escondido");
}

// Páginas de criação dos quizzes
let criaQuizzPagina1;
let criaQuizzPagina2;
let criaQuizzPagina3;
let criaQuizzPagina4;

criaQuizzPagina1 = `<div class="new-quizz">  
<h3>Comece pelo começo</h3>
<form class="form-quizz1">
    <div class="inputs-container">
        <input type="text" id="titulo-quizz" minlength="20" maxlength="65" placeholder="Título do seu quizz" required>
        <small id="erro-titulo-quizz"></small>
        <input type="url" id="url-img-quizz" placeholder="URL da imagem do seu quizz" required>
        <small id="erro-url-quizz"></small>
        <input type="number" id="qtd-perguntas" min="3" placeholder="Quantidade de perguntas do quizz" required>
        <small id="erro-qtd-perguntas-quizz"></small>
        <input type="number" id="qtd-niveis" min="2" placeholder="Quantidade de níveis do quizz" required>
        <small id="erro-qtd-niveis-quizz"></small>
    </div>
    <button type="button" onclick="testaParametrosPag1()">Prosseguir para criar perguntas</button>
</form>
</div>`;

function pag2() {
  criaQuizzPagina2 = "";
  criaQuizzPagina2 += `<div class="new-quizz">  
  <h3>Crie suas perguntas</h3>`;
  for (i = 0; i < qtd_perguntas; i++) {
    criaQuizzPagina2 += `<form class="form-quizz2">
    <div onclick="selecionaCaixaInput(this)" class="pergunta">
                <h4>Pergunta ${i + 1}</h4>
                <ion-icon name="create-outline"></ion-icon>
            </div>
        <div class="inputs-container escondido">
          
          <input type="text" id="texto-pergunta${
            i + 1
          }" minlength="20" placeholder="Texto da pergunta" required>
          <small id="erro-texto-pergunta${i + 1}"></small>
          <input type="text" id="cor-pergunta${
            i + 1
          }" placeholder="Cor do fundo da pergunta" required>
          <small id="erro-cor-pergunta${i + 1}"></small>
          <h4>Resposta correta</h4>
          <input type="text" id="resposta-correta${
            i + 1
          }" placeholder="Resposta correta" required>
          <small id="erro-resposta-correta${i + 1}"></small>
          <input type="url" id="url-img-correta${
            i + 1
          }" placeholder="URL da imagem" required>
          <small id="erro-url-correta${i + 1}"></small>
          <h4>Respostas incorretas</h4>
          <input type="text" id="resposta-incorreta${
            i + 1
          }-1" placeholder="Resposta incorreta 1" required>
          <small id="erro-resposta-incorreta${i + 1}"></small>
          <input type="url" id="url-img-incorreta${
            i + 1
          }-1" placeholder="URL da imagem 1" required>
          <small id="erro-url-incorreta${i + 1}"></small>
          <br>
          <input type="text" id="resposta-incorreta${
            i + 1
          }-2" placeholder="Resposta incorreta 2">
          <input type="url" id="url-img-incorreta${
            i + 1
          }-2" placeholder="URL da imagem 2">
          <br>
          <input type="text" id="resposta-incorreta${
            i + 1
          }-3" placeholder="Resposta incorreta 3">
          <input type="url" id="url-img-incorreta${
            i + 1
          }-3" placeholder="URL da imagem 3">
      </div> </form> `;
  }
  criaQuizzPagina2 += `<button type="button" onclick="testaParametrosPag2()">Prosseguir para criar níveis</button> </div>`;
  return criaQuizzPagina2;
}

function pag3() {
  criaQuizzPagina3 = "";
  criaQuizzPagina3 += `<div class="new-quizz">
        <h3>Agora, decida os níveis!</h3>`;
  for (i = 0; i < qtd_niveis; i++) {
    criaQuizzPagina3 += `
        <form class="form-quizz3">
    
            <div onclick="selecionaCaixaInput(this)" class="nivel">
                <h4>Nível ${i + 1}</h4>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputs-container escondido">
                <input type="text" id="titulo-nivel${
                  i + 1
                }" minlength="10" placeholder="Título do nível" required>
                <small id="erro-titulo-nivel${i + 1}"></small>
                <input type="number" id="porcentagem-nivel${
                  i + 1
                }" placeholder="% de acerto mínima" min="0" min="100" required>
                <small id="erro-porcentagem-nivel${i + 1}"></small>
                <input type="url" id="url-nivel${
                  i + 1
                }" min="3" placeholder="URL da imagem do nível" required>
                <small id="erro-url-nivel${i + 1}"></small>
                <textarea name="" id="descricao-nivel${
                  i + 1
                }" placeholder="Descrição do nível" cols="30" rows="10"></textarea>
                <small id="erro-descricao-nivel${i + 1}"></small>
            </div> </form> `;
  }
  criaQuizzPagina3 += `<button onclick="testaParametrosPag3()" type="button">Finalizar Quizz</button>     
    </div>`;
  return criaQuizzPagina3;
}

function pag4() {
  criaQuizzPagina4 = `<div class="new-quizz final-page">
  <h3>Seu quizz está pronto!</h3>
  <div class="quizz" onclick="exibirQuizz()">
      <img src=${url_quizz}>
      <div></div>
      <h5>${titulo_quizz}</h5>
  </div>
  <button type="button" onclick="acessarQuizzCriado()">Acessar Quizz</button>
  <p onclick="telaInicial()"> Voltar para home</p>
</div>`;
  return criaQuizzPagina4;
}

function acessarQuizzCriado() {
  telaInicial();
  const idQuizzCriado = quizzesUsuario[quizzesUsuario.length - 1].id;
  exibirQuizz(idQuizzCriado, "usuario");
}

// Enviar quizz finalizado
let quizz_usuario = {};
let questions = [];
let answers = [];
let levels = [];

function criaQuizzUsuario() {
  const promise = axios.post(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",
    quizz_usuario
  );

  promise.catch(erroEnvioQuizz);
  promise.then(chamaTelaFinalCriacaoQuizz);
}

function erroEnvioQuizz() {
  alert("Ocorreu um erro ao tentarmos enviar o quizz para o servidor!");
}

function chamaTelaFinalCriacaoQuizz(element) {
  quizzesUsuario.push(element.data);
  salvaLocalStorage(element.data);
}

function iniciaLocalStorage() {
  const existeQuizz = JSON.parse(localStorage.getItem("quizzesUsuario"));
  if (!existeQuizz) {
    localStorage.setItem("quizzesUsuario", JSON.stringify([]));
  }
}
iniciaLocalStorage();

function salvaLocalStorage(id_quizz) {
  let quizzes_usuario = JSON.parse(localStorage.getItem("quizzesUsuario"));
  quizzes_usuario.push(id_quizz);
  localStorage.setItem("quizzesUsuario", JSON.stringify(quizzes_usuario));
  telaCriacaoQuizz(4);
}

// Página inicial
let HomePage;
let quizzesUsuario = [];

const semQuizz = `
  <p>Você não criou nenhum quizz ainda :(</p>
  <button onclick="telaCriacaoQuizz(1)">Criar quiz</button>
`;

const comQuizz = `
  <span>
    <h4>Seus quizzes</h4>
    <ion-icon onclick="telaCriacaoQuizz(1)" name="add-circle"></ion-icon>
  </span>
  <div class="quizz-list"></div>
`;

HomePage = `<div class="home-page">
        <div class="your-quizzes empty">
        </div>
        <div class="all-quizzes">
            <h4>Todos os Quizzes</h4>
            <!--colocar pelo js-->
            <div class="quizz-list"></div>
        </div>
        
        <div class="loading-page escondido">
          <img src="./img/loading.jpg" alt="loading gif">
          <p>Carregando</p>
        </div>`;

function telaInicial() {
  document.querySelector(".current-page").innerHTML = HomePage;
  carregarQuizzes();
}

telaInicial();

// Carregamento e listagem dos quizzes

function carregarQuizzes() {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );

  paginaLoading();

  promise.catch(erroListagem);
  promise.then(renderizarQuizzesTodos);

  renderizarQuizzesUsuario();
}

function erroListagem(erro) {
  alert("Erro: não foi possível carregar os quizzes!");
}

let quizzes = [];

function renderizarQuizzesTodos(resposta) {
  paginaLoading();

  let lista = document.querySelector(".all-quizzes .quizz-list");

  quizzes = resposta.data;
  const n = quizzes.length;

  lista.innerHTML = "";

  for (let i = 0; i < n; i++) {
    lista.innerHTML += `
    <div class="quizz" onclick="exibirQuizz(${quizzes[i].id}, 'todos')">
       <img src=${quizzes[i].image}>
       <div></div>
       <h5>${quizzes[i].title}</h5>
    </div>`;
  }
}

function renderizarQuizzesUsuario() {
  let userQuizList = document.querySelector(".your-quizzes");
  quizzesUsuario = JSON.parse(localStorage.getItem("quizzesUsuario"));
  if (quizzesUsuario[0] === undefined) {
    userQuizList.innerHTML = semQuizz;
  } else {
    userQuizList.classList.remove("empty");
    userQuizList.innerHTML = comQuizz;

    let lista = document.querySelector(".your-quizzes .quizz-list");

    const n = quizzesUsuario.length;
    lista.innerHTML = "";

    for (let i = 0; i < n; i++) {
      lista.innerHTML += `
        <div class="quizz" onclick="exibirQuizz(${quizzesUsuario[i].id}, 'usuario')">
          <img src=${quizzesUsuario[i].image}>
          <div></div>
          <h5>${quizzesUsuario[i].title}</h5>
        </div>`;
    }
  }
}

// Exibição de um quizz

function buscaPorId(id, tipo) {
  paginaLoading();

  let lista;

  if (tipo === "todos") {
    lista = quizzes;
  }

  if (tipo === "usuario") {
    lista = quizzesUsuario;
  }

  if (lista == undefined) {
    alert("Erro: Não foi possível encontrar o quizz!");
  }

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      return lista[i];
    }
  }
  alert("Erro: Não foi possível encontrar o quizz!");
}

function comparador() {
  return Math.random() - 0.5;
}

let acertos;

function exibirQuizz(id, tipo) {
  paginaLoading();
  let quizz = buscaPorId(id, tipo);
  acertos = 0;
  let n = quizz.questions.length;
  let k;

  for (let i = 0 ; i < n ; i++) {
    quizz.questions[i].answers.sort(comparador);
  }

  let node = document.querySelector(".current-page");

  node.innerHTML = `
  <div class="quizz-page">
    <div class="title">
      <img src="${quizz.image}">
      <div></div>
      <h2>${quizz.title}</h2>
    </div>
  </div>`;

  node = document.querySelector(".quizz-page");

  for (let i = 0; i < n; i++) {
    node.innerHTML += `
      <div class="quizz-display ${i + 1}">
        <div class="question"  style="background-color: ${
          quizz.questions[i].color
        }"><h3>${quizz.questions[i].title}</h3></div>
        <div class="answers-${i + 1}"></div>  
      </div> `;
  }

  for (let i = 0; i < n; i++) {
    node = document.querySelector(`.answers-${i + 1}`);
    k = quizz.questions[i].answers.length;

    for (let j = 0; j < k; j++) {
      let elemento = quizz.questions[i].answers[j];
      node.innerHTML += `
      <div class="answer" onclick="checaResposta(this, ${id}, '${tipo}', ${i})">
        <img src="${elemento.image}">
        <h4>${elemento.text}</h4>
      </div>`;
    }
  }

  node = document.querySelector(".quizz-page");

  node.innerHTML += `
    <button class="restart" onclick="exibirQuizz(${id}, '${tipo}')">Reiniciar Quizz</button>
    <button class="back-home" onclick="telaInicial()">Voltar para home</button>
    `;

  document.querySelector(".title").scrollIntoView();
}

function checaResposta(resposta, id, tipo, j) {
  if (
    resposta.classList.contains("right") ||
    resposta.classList.contains("wrong")
  ) {
    return;
  }

  let quizz = buscaPorId(id, tipo);
  let opcoes = resposta.parentNode.childNodes;
  let gabarito = quizz.questions[j].answers;
  let n = opcoes.length;

  for (let i = 0; i < n ; i += 2) {
    if (gabarito[i / 2].isCorrectAnswer === true) {
      opcoes[i+1].classList.add("right");
    } else {
      opcoes[i+1].classList.add("wrong");
    }
  }

  if (resposta.classList.contains("right")) {
    acertos++;
  }

  let cliques = document.querySelectorAll(".right").length;

  let proxima;
  if (resposta.parentNode.parentNode.classList.contains("1")) {
    proxima = resposta.parentNode.parentNode.parentNode.childNodes[5];
    setTimeout(proximoItem, 2000, proxima);
  }
  if (resposta.parentNode.parentNode.classList.contains("2")) {
    proxima = resposta.parentNode.parentNode.parentNode.childNodes[7];
    setTimeout(proximoItem, 2000, proxima);
  }

  if (cliques === quizz.questions.length) {
    const score = calculaPontuacao(cliques);
    exibirResultado(score, id, tipo);
  }
}

function calculaPontuacao(n) {
  const score = Math.round((acertos / n) * 100);
  return score;
}

function proximoItem(elemento) {
  elemento.scrollIntoView();
}

function exibirResultado(score, id, tipo) {
  let quizz = buscaPorId(id, tipo);
  let nivel;
  let node;

  for (let i = 0; i < quizz.levels.length; i++) {
    if (score >= quizz.levels[i].minValue) {
      nivel = quizz.levels[i];
    } else {
      i = quizz.levels.length;
    }
  }

  node = document.querySelector(".restart");
  node.parentNode.removeChild(node);
  node = document.querySelector(".back-home");
  node.parentNode.removeChild(node);

  document.querySelector(".quizz-page").innerHTML += `
    <div class="quizz-display result">
      <div><h3>${score}% de acerto: ${nivel.title}</h3></div>
      <div>
        <img src="${nivel.image}">
        <p>${nivel.text}</p>
      </div>
    </div>
    <button class="restart" onclick="exibirQuizz(${id}, '${tipo}')">Reiniciar Quizz</button>
    <button class="back-home" onclick="telaInicial()">Voltar para home</button>`;

  const resultado = document.querySelector(".result");
  setTimeout(proximoItem, 2000, resultado);
}

//Bonus: loading

function paginaLoading() {
  const node = document.querySelector(".loading-page");

  if (node != undefined) {
    node.classList.toggle("escondido");
  }
}
