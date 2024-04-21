function render(infos) {
    const container = document.querySelector("#container");
    container.id = "container";
    container.innerHTML = "";


    const form = document.createElement("div");
    form.id = "form";
    container.appendChild(form);
    
    infos.forEach(({ano, empresa, funcao }) =>{
        const item = document.createElement("div");
        item.classList.add("card"); 
       
        item.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${ano}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${empresa}</h6>
                <p class="card-text">${funcao}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`;
       
        form.appendChild(item);
    });

}
export default { render };