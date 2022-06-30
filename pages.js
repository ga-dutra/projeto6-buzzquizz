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

// Páginas de carregamento e listagem dos quizzes
