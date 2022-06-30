// Páginas de criação dos quizzes
let criarQuizzHomePage;
let criaQuizzPagina1;
let criaQuizzPagina2;
let criaQuizzPagina3 = "";
let criaQuizzPagina4;

criarQuizzHomePage = `<div class="home-page">
        <div class="your-quizzes empty">
            <!-- tirar no js junto com a classe 'empty' ao adicionar quizzes-->
            <p>Você não criou nenhum quizz ainda :(</p>
            <button onclick="telaCriacaoQuizz(1)">Criar quiz</button>

            <!-- colocar pelo js
            <span>
                <h4>Seus quizzes</h4>
                <ion-icon name="add-circle"></ion-icon>
            </span>

            <div class="quizz-list">
                colocar um a um pelo js 
                <div class="image"><h5>Título do quizz</h5></div>
            </div>-->

        </div>

        <div class="all-quizzes">
            <h4>Todos os Quizzes</h4>
            <!--colocar pelo js-->
            <div class="quizz-list">
                <div class="image">
                    <h5>Título do quizz</h5>
                </div>
                <div class="image">
                    <h5>Título do quizz</h5>
                </div>
                <div class="image">
                    <h5>Título do quizz</h5>
                </div>
                <div class="image">
                    <h5>Título do quizz</h5>
                </div>
                <div class="image">
                    <h5>Título do quizz</h5>
                </div>
                <div class="image">
                    <h5>Título do quizz</h5>
                </div>
            </div>

        </div>`;

function telaInicial1() {
  document.querySelector(".current-page").innerHTML = criarQuizzHomePage;
}
telaInicial1();

criaQuizzPagina1 = `<div class="new-quizz">  
<h4>Comece pelo começo</h4>
<form class="form-quizz1">
    <div class="inputs-container">
        <input type="text" id="titulo-quizz" minlength="20" maxlength="65" placeholder="Título do seu quizz" required>
        <input type="url" id="url-img-quizz" placeholder="URL da imagem do seu quizz" required>
        <input type="number" id="qtd-perguntas" min="3" placeholder="Quantidade de perguntas do quizz" required>
        <input type="number" id="qtd-niveis" min="2" placeholder="Quantidade de níveis do quizz" required>
    </div>
    <button onclick="testaParametrosIniciais()">Prosseguir para criar perguntas</button>
</form>`;

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

// Páginas de carregamento e listagem dos quizzes
