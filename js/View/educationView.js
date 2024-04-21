function render(infos) {
    const container = document.querySelector("#container");
    container.id = "container";
    container.innerHTML = "";


    const form = document.createElement("div");
    form.id = "form";
    container.appendChild(form);
    
    infos.forEach(({ano, escola, diploma, imagem }) =>{
        const item = document.createElement("div");
        item.classList.add("card"); 
       
        item.innerHTML = `
            <img src="${imagem}" id="imagemLogo" class="card-img-top" alt="Imagem card" >
            <div class="card-body">
                <h5 class="card-title">${ano}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${escola}</h6>
                <p class="card-text">${diploma}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`;
       
        form.appendChild(item);
    });

}
export default { render };