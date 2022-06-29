// Páginas de criação dos quizzes
let criaQuizzPagina1;
let criaQuizzPagina2;
let criaQuizzPagina3;
let criaQuizzPagina4;

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
