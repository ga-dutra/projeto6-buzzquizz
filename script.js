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
  quizz_usuario = {
    title: document.querySelector(`#titulo-quizz`).value,
    image: document.querySelector(`#url-img-quizz`).value,
    questions: "",
    levels: "",
  };
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

  if (
    titulo_valido &&
    url_valido &&
    qtd_perguntas_valido &&
    qtd_niveis_valido
  ) {
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

  for (i = 0; i < qtd_perguntas; i++) {
    questions[i] = {
      title: document.querySelector(`#texto-pergunta${i + 1}`).value,
      color: document.querySelector(`#cor-pergunta${i + 1}`).value,
      answers: [],
    };
  }

  quizz_usuario.questions = questions;
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

  for (i = 0; i < qtd_perguntas; i++) {
    for (j = 0; j < qtd_perguntas; j++) {
      if (j === 0) {
        questions[i].answers[j] = {
          text: document.querySelector(`#resposta-correta${i + 1}`).value,
          image: document.querySelector(`#url-img-correta${i + 1}`).value,
          isCorrectAnswer: true,
        };
      } else if (
        wrong_answers[i][j - 1] !== "" &&
        wrong_imgs[i][j - 1] !== ""
      ) {
        questions[i].answers[j] = {
          text: wrong_answers[i][j - 1],
          image: wrong_imgs[i][j - 1],
          isCorrectAnswer: false,
        };
      }
    }
  }

  if (
    perguntas.length === perguntas_validas.length &&
    cores.length === cores_validas.length &&
    respostas_corretas_validas.length >= qtd_perguntas &&
    respostas_incorretas_validas.length >= qtd_perguntas &&
    imgs_corretas_validas.length >= qtd_perguntas &&
    imgs_incorretas_validas.length >= qtd_perguntas
  ) {
    alert("está tudo certo!");
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

  for (i = 0; i < qtd_niveis; i++) {
    titulo_nivel.push(document.querySelector(`#titulo-nivel${i + 1}`).value);
    porcentagem.push(
      document.querySelector(`#porcentagem-nivel${i + 1}`).value
    );
    url_nivel.push(document.querySelector(`#url-nivel${i + 1}`).value);
    descricao_nivel.push(
      document.querySelector(`#descricao-nivel${i + 1}`).value
    );
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
    alert("está tudo certo!");
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
    // alert(str + " não é uma cor válida");
    return;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
          str[i]
        ) < 0
      ) {
        // alert(str + " não é uma cor válida");
        return;
      }
    }
  }
  return true;
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
        <input type="url" id="url-img-quizz" placeholder="URL da imagem do seu quizz" required>
        <input type="number" id="qtd-perguntas" min="3" placeholder="Quantidade de perguntas do quizz" required>
        <input type="number" id="qtd-niveis" min="2" placeholder="Quantidade de níveis do quizz" required>
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
          <input type="text" id="cor-pergunta${
            i + 1
          }" placeholder="Cor do fundo da pergunta" required>

          <h4>Resposta correta</h4>
          <input type="text" id="resposta-correta${
            i + 1
          }" placeholder="Resposta correta" required>
          <input type="url" id="url-img-correta${
            i + 1
          }" placeholder="URL da imagem" required>

          <h4>Respostas incorretas</h4>
          <input type="text" id="resposta-incorreta${
            i + 1
          }-1" placeholder="Resposta incorreta 1" required>
          <input type="url" id="url-img-incorreta${
            i + 1
          }-1" placeholder="URL da imagem 1" required>
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
                <input type="number" id="porcentagem-nivel${
                  i + 1
                }" placeholder="% de acerto mínima" min="0" min="100" required>
                <input type="url" id="url-nivel${
                  i + 1
                }" min="3" placeholder="URL da imagem do nível" required>
                <textarea name="" id="descricao-nivel${
                  i + 1
                }" placeholder="Descrição do nível" cols="30" rows="10"></textarea>
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
  <button type="button" onclick="">Acessar Quizz</button>
  <p>Voltar para home</p>
</div>`;
  return criaQuizzPagina4;
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

function chamaTelaFinalCriacaoQuizz() {
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
    <ion-icon name="add-circle"></ion-icon>
  </span>

  <div class="quizz-list"></div>-->
`;

HomePage = `<div class="home-page">
        <div class="your-quizzes empty"></div>

        <div class="all-quizzes">
            <h4>Todos os Quizzes</h4>
            <!--colocar pelo js-->
            <div class="quizz-list"></div>

        </div>`;

function telaInicial() {
  document.querySelector(".current-page").innerHTML = HomePage;
  carregarQuizzes();
}
//telaInicial();

// Carregamento e listagem dos quizzes

function carregarQuizzes() {
  const promise = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );

  promise.catch(erroListagem);
  promise.then(renderizarQuizzesTodos);

  renderizarQuizzesUsuario();
}

function erroListagem(erro) {
  alert("Erro: não foi possível carregar os quizzes!");
}

function renderizarQuizzesTodos(resposta) {
  let lista = document.querySelector(".all-quizzes .quizz-list");
  let quizzes = [];
  quizzes = resposta.data;
  const n = quizzes.length;

  lista.innerHTML = "";

  for (let i = n - 1; i >= n - 6; i--) {
    lista.innerHTML += `
    <div class="quizz" onclick="exibirQuizz(${quizzesUsuario[i]})">
       <img src=${quizzes[i].image}>
       <div></div>
       <h5>${quizzes[i].title}</h5>
    </div>`;
  }
}

function renderizarQuizzesUsuario() {
  let userQuizList = document.querySelector(".your-quizzes");

  if (quizzesUsuario[0] === undefined) {
    userQuizList.innerHTML = semQuizz;
  } else {
    userQuizList.classList.remove("empty");
    userQuizList.innerHTML = comQuizz;

    let lista = document.querySelector(".your-quizzes .quizz-list");
    const n = quizzesUsuario.length;

    lista.innerHTML = "";

    for (let i = 0; i > n && i < 6; i++) {
      lista.innerHTML += `
        <div class="quizz" onclick="exibirQuizz(${quizzesUsuario[i]})">
          <img src=${quizzesUsuario[i].image}>
          <div></div>
          <h5>${quizzesUsuario[i].title}</h5>
        </div>`;
    }
  }
}

// Ezibição de um quizz

function exibirQuizz(quizz) {}
