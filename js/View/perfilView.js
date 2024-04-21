function render(perfis) {
    const container = document.querySelector("#container");
    container.id = "container";
    container.innerHTML = "";

         //caixa apresentaçao
        const apresentation = document.createElement("div");
        apresentation.id ="apresentation";
        container.appendChild(apresentation);
                //frase bonita
                const frase = document.createElement("div");
                frase.id = "frase";
                frase.innerHTML = '<div class="frase1">FULL-STACK DEVELOPER</div>' +
                '<div class="frase2">I can help your business to</div>' +
                '<div class="frase3">Get better and grow fast</div>';
                
                apresentation.appendChild(frase);
    
                //imagem
                const imagemPerfil = document.createElement("div");
                imagemPerfil.id = "imagemPerfil";
                imagemPerfil.innerHTML = '<img src="resources/foto1.jpg"  style="width: 300px; height: auto; border-radius: 10%">';
                apresentation.appendChild(imagemPerfil);

        //contactos
        const contactos = document.createElement("div");
        contactos.id = "contactos";
        contactos.innerHTML = `
        <button type="button" class="btn btn-outline-success">Education</button>
        <button type="button" class="btn btn-outline-success">Projects</button>`;
        container.appendChild(contactos);

        //About me
        const aboutMe = document.createElement("div");
        aboutMe.id = "aboutMe";
        aboutMe.innerHTML = '<div class = "aboutme1"> About me </div>' +
        '<div class = "aboutme2"> I\'m a former captain of the management and administration ship who decided to navigate the seas of code. I\'ve dabbled in sales, led teams, and now, I\'m plunging into the programming ocean.</div>' +
        '<div class = "aboutme2"> Whether steering projects or charming clients, I\'m always seeking the next frontier. Currently, I\'m navigating the tech universe, where every bug is a challenge to conquer, and every line of code is a small victory.</div>' +
        '<div class = "aboutme2"> Outside the coding sphere, catch me grooving to music, appreciating the wonders of nature, indulging in video games, and exploring all things tech-related.</div>' +
        '<div class = "aboutme2">Let\'s collaborate and create something amazing together.</div>';
        container.appendChild(aboutMe);

        //footer
        const footer = document.createElement("div");
        footer.id = "footer";
        footer.innerHTML = '<div> FOOTER REDES SOCIAIS </div>';
        container.appendChild(footer);
      
}
export default { render };