function render(perfis) {
    const container = document.querySelector("#container");
    container.id = "containerPerfil";
    container.innerHTML = "";

//texto inicial
  const firstBox = document.createElement("div");
  firstBox.id = "firstBox";
  firstBox.innerHTML = '<div class="linha1">FULL-STACK DEVELOPER</div>' +
  '<div class="linha2">I can help your business to</div>' +
  '<div class="linha3">Get better and grow fast</div>';

  
  
  container.appendChild(firstBox);

//butoes 
const butoes = document.createElement("div");
butoes.id = "butoes";
butoes.innerHTML = `
    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck1">Projects</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck2">Experience</label>

    </div>
`;

firstBox.appendChild(butoes);

    //Imagem de perfil
    const imagePerfil = document.createElement("div");
    imagePerfil.id = "imagePerfil";

    imagePerfil.innerHTML = `<img src="resources/foto1.jpg"  style="width: 300px; height: auto; border-radius: 10%"> `;
    container.appendChild(imagePerfil);




    const rodape = document.createElement("div");
    rodape.id = "rodape";
    rodape.innerHTML = '<div class="rodape1">About me</div>' +
    '<div class="rodape2">My name is Start Bootstrap and I help brands grow.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</div>' +

      '<div class="rodape3">papapaap</div>';
    
    container.appendChild(rodape);


    

    //info pessoais
   /* perfis.forEach(({ telefone, email, morada }) => {
        const infoPerfil = document.createElement("div");
        infoPerfil.id = "infoPerfil";

        infoPerfil.innerHTML = ` <div class="card" style="width: 18rem;">
        <div class="card-header">
          Pedro Gueirez
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${telefone}</li>
          <li class="list-group-item">${email}</li>
          <li class="list-group-item">${morada}</li>
        </ul>
      </div>
        
        

`;

        container.appendChild(infoPerfil);
    });*/




//rodape


}


export default { render };








/*  container.innerHTML = "<br>";
const list = document.createElement("div");

list.style = `display: flex; margin-top: 10%`;
list.className = `text-center`;

perfis.forEach(({nome, ano, director}) => {
const item = document.createElement("div");
item.className = `col card text-white bg-primary mb-3" style="max-width: 18rem;`;
 item.innerHTML = `<div class="card-header">${nome}</div>
                        <div class="card-body">
                            <h5 class="card-title">${ano}</h5>
                            <p class="card-text">
                                <p>year: ${director}</p>
                            </p>
                    </div>`;
 list.appendChild(item);                   
});  */



