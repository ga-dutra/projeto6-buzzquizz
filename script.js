function telaCriacaoQuizz(tela) {
  const conteudo_tela = document.querySelector(".current-page");
  if (tela === 1) {
    conteudo_tela.innerHTML = criaQuizzPagina1;
  }

  if (tela === 3) {
    conteudo_tela.innerHTML = pag3();
  }
}
let titulo_quizz;
let url_img_quizz;
let qtd_perguntas;
let qtd_niveis = 0;

function testaParametrosIniciais() {
  // obtem parâmetros dos inputs
  titulo = document.querySelector("#titulo-quizz").value;
  url = document.querySelector("#url-img-quizz").value;
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

function editarPergunta(elemento) {
  const no = elemento.parentNode.children;
  no[2].classList.toggle("escondido");
}

function checarCor(str) {
  if (str[0] !== "#" || str.length !== 7) {
    alert(str + " não é uma cor válida");
    return;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
          str[i]
        ) < 0
      )
        alert(str + " não é uma cor válida");
      return;
    }
  }
}


// Páginas de criação dos quizzes
let criaQuizzPagina1;
let criaQuizzPagina2;
let criaQuizzPagina3 = "";
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
    <button onclick="testaParametrosIniciais()">Prosseguir para criar perguntas</button>
</form>
</div>`;

function pag2() {
  criaQuizzPagina2 = `
<div class="new-quizz">  
        <h3>Crie suas perguntas</h3>
        <form class="form-quizz2">
            <div class="inputs-container">
                <h4>Pergunta 1</h4>
                <input type="text" id="texto-pergunta1" minlength="20" placeholder="Texto da pergunta" required>
                <input type="text" id="cor-pergunta1" placeholder="Cor do fundo da pergunta" required>

                <h4>Resposta correta</h4>
                <input type="text" id="resposta-correta1" placeholder="Resposta correta" required>
                <input type="url" id="url-img-correta1" placeholder="URL da imagem" required>

                <h4>Respostas incorretas</h4>
                <input type="text" id="resposta-incorreta1.1" placeholder="Resposta incorreta 1" required>
                <input type="url" id="url-img-incorreta1.1" placeholder="URL da imagem 1" required>
                <br>
                <input type="text" id="resposta-incorreta1.2" placeholder="Resposta incorreta 2">
                <input type="url" id="url-img-incorreta1.2" placeholder="URL da imagem 2">
                <br>
                <input type="text" id="resposta-incorreta1.3" placeholder="Resposta incorreta 3">
                <input type="url" id="url-img-incorreta1.3" placeholder="URL da imagem 3">
            </div>

            <div class="inputs-container">
                <h4>Pergunta 2</h4>
                <ion-icon name="create-outline" class="edit" onclick="editarPergunta(this)"></ion-icon>
                <div class="escondido">
                    <input type="text" id="texto-pergunta2" minlength="20" placeholder="Texto da pergunta" required>
                    <input type="text" id="cor-pergunta2" placeholder="Cor do fundo da pergunta" required>

                    <h4>Resposta correta</h4>
                    <input type="text" id="resposta-correta2" placeholder="Resposta correta" required>
                    <input type="url" id="url-img-correta2" placeholder="URL da imagem" required>

                    <h4>Respostas incorretas</h4>
                    <input type="text" id="resposta-incorreta2.1" placeholder="Resposta incorreta 1" required>
                    <input type="url" id="url-img-incorreta2.1" placeholder="URL da imagem 1" required>
                    <br>
                    <input type="text" id="resposta-incorreta2.2" placeholder="Resposta incorreta 2">
                    <input type="url" id="url-img-incorreta2.2" placeholder="URL da imagem 2">
                    <br>
                    <input type="text" id="resposta-incorreta2.3" placeholder="Resposta incorreta 3">
                    <input type="url" id="url-img-incorreta2.3" placeholder="URL da imagem 3">
                </div>
            </div>

            <div class="inputs-container">
                <h4>Pergunta 3</h4>
                <ion-icon name="create-outline" class="edit" onclick="editarPergunta(this)"></ion-icon>
                <div class="escondido">
                    <input type="text" id="texto-pergunta3" minlength="20" placeholder="Texto da pergunta" required>
                    <input type="text" id="cor-pergunta3" placeholder="Cor do fundo da pergunta" required>

                    <h4>Resposta correta</h4>
                    <input type="text" id="resposta-correta3" placeholder="Resposta correta" required>
                    <input type="url" id="url-img-correta3" placeholder="URL da imagem" required>

                    <h4>Respostas incorretas</h4>
                    <input type="text" id="resposta-incorreta3.1" placeholder="Resposta incorreta 1" required>
                    <input type="url" id="url-img-incorreta3.1" placeholder="URL da imagem 1" required>
                    <br>
                    <input type="text" id="resposta-incorreta3.2" placeholder="Resposta incorreta 2">
                    <input type="url" id="url-img-incorreta3.2" placeholder="URL da imagem 2">
                    <br>
                    <input type="text" id="resposta-incorreta3.3" placeholder="Resposta incorreta 3">
                    <input type="url" id="url-img-incorreta3.3" placeholder="URL da imagem 3">
                </div>
            </div>

            <button onclick="testaParametrosIniciais()">Prosseguir para criar níveis</button>
        </form> 
    </div>
`;
}

function pag3() {
  criaQuizzPagina3 += `<div class="new-quizz">
        <h4>Agora, decida os níveis!</h4>`;
  for (i = 0; i < qtd_niveis; i++) {
    criaQuizzPagina3 += `
        <form class="form-quizz3">
            <div onclick="selecionaNivel(this)" class="nivel">
                <h3>Nível ${i + 1}</h3>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <div class="inputs-container">
                <input type="text" id="titulo-nivel-${
                  i + 1
                }" minlength="10" placeholder="Título do nível" required>
                <input type="number" id="%acerto-nivel-${
                  i + 1
                }" placeholder="% de acerto mínima" min="0" min="100" required>
                <input type="url" id="url-nivel-${
                  i + 1
                }" min="3" placeholder="URL da imagem do nível" required>
                <textarea name="" id="descricao-nivel-${
                  i + 1
                }" placeholder="Descrição do nível" cols="30" rows="10"></textarea>
            </div> </form>`;
  }
  criaQuizzPagina3 += `<button>Finalizar Quizz</button>     
    </div>`;
  return criaQuizzPagina3;
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
  const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
  
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

  for(let i = n-1 ; i >= n-6 ; i --) {
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

  if(quizzesUsuario[0] === undefined) {
    userQuizList.innerHTML = semQuizz;
  } else {
      userQuizList.classList.remove("empty");
      userQuizList.innerHTML = comQuizz;

      let lista = document.querySelector(".your-quizzes .quizz-list");
      const n = quizzesUsuario.length;

      lista.innerHTML = "";

      for(let i = 0 ; i > n && i < 6; i ++) {
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

function exibirQuizz(quizz) {

}