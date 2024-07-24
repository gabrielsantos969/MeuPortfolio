const linguagensImagens = [
    "./static/icons/javascript.png",    // índice 0
    "./static/icons/nodejs.png",        // índice 1
    "./static/icons/react.png",         // índice 2
    "./static/icons/git.png",           // índice 3
    "./static/icons/mysql.png",         // índice 4
    "./static/icons/typescript.png",    // índice 5
    "./static/icons/css-3.png",         // índice 6
    "./static/icons/html-5.png"         // índice 7
  ];

document.addEventListener('DOMContentLoaded', function() {
    fetch('./data/conhecimento.json')
        .then(response => response.json())
        .then(data => {
        renderConhecimentos(data.data);
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
  
function renderConhecimentos(conhecimentos) {
const container = document.getElementById('conhecimentos-container');
    conhecimentos.forEach(conhecimento => {
        const card = `
        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
            <div class="card card-custom h-100">
            <img src="${conhecimento.img}" class="card-img-top" alt="${conhecimento.nome}">
            <div class="card-body">
                <h5 class="card-title">${conhecimento.nome}</h5>
                <p class="card-text">${conhecimento.descricao}</p>
            </div>
            </div>
        </div>
        `;
        container.innerHTML += card;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('./data/projetos.json')
        .then(response => response.json())
        .then(data => {
        renderProjetos(data.data);
        })
        .catch(error => console.error('Erro ao carregar o JSON Projetos:', error));
});
  
function renderProjetos(projetos) {
    const container = document.getElementById('projetos-container');
    projetos.forEach(projeto => {

        const linguagensImages = projeto.linguagens_utilizadas.map(index => 
            `<img src="${linguagensImagens[index]}" class="img-fluid m-1" width="35" height="35" alt="Linguagem utilizada">`
          ).join('');

        const card = `
        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
            <div class="card card-custom h-100 d-flex flex-column">
            <img src="${projeto.img}" class="card-img-top" alt="${projeto.nome}">
            <div class="card-body text-center flex-grow-1 d-flex flex-column">
                <h5 class="card-title">${projeto.nome}</h5>
                <p class="card-text flex-grow-1 d-flex align-items-center justify-content-center">${projeto.descricao}</p>
                <hr class="my-3">
                <div class="text-center">
                    ${linguagensImages}
                </div>
                <a href="${projeto.link}" class="btn btn-primary mt-3" target="_blank">Ver Projeto</a>
            </div>
            </div>
        </div>
        `;
        container.innerHTML += card;
    });
}
  