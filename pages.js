// Páginas de criação dos quizzes
let criarQuizzHomePage;
let criaQuizzPagina1;
let criaQuizzPagina2;
let criaQuizzPagina3;
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

        </div>


        <div class="new-quizz">
            <h4>Agora, decida os níveis!</h4>
            <form class="form-quizz3">
                <div onclick="selecionaNivel(this)" class="nivel">
                    <h5>Nível 1</h5>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
                <div class="inputs-container">
                    <input type="text" id="titulo-nivel-${i}" minlength="10" placeholder="Título do nível" required>
                    <input type="url" id="url" placeholder="% de acerto mínima" required>
                    <input type="number" id="qtd-perguntas" min="3" placeholder="URL da imagem do nível" required>
                    <textarea name="" id="" placeholder="Descrição do nível" cols="30" rows="10"></textarea>
                </div>
                <button onclick="testaParametrosIniciais()">Finalizar Quizz</button>
            </form>
        </div>
    </div>`

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

// Páginas de carregamento e listagem dos quizzes
