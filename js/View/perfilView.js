function render(perfis) {
        const container = document.querySelector("#container");
        container.id = "container";
        container.innerHTML = "";

        //caixa apresentaçao
        const apresentation = document.createElement("div");
        apresentation.id = "apresentation";
        container.appendChild(apresentation);
        //frase bonita
        const frase = document.createElement("div");
        frase.id = "frase";
        frase.innerHTML = '<div class="frase1">Hi, I\'m Pedro Gueirez </div>' +
                '<div class="frase2">FULL-STACK DEVELOPER</div>' +
                '<div class = "frase3"> I\'m a former captain of the management and administration ship who decided to navigate the seas of code. I\'ve dabbled in sales, led teams, and now, I\'m plunging into the programming ocean.</div>' +
                '<div class = "frase3"> Whether steering projects or charming clients, I\'m always seeking the next frontier. Currently, I\'m navigating the tech universe, where every bug is a challenge to conquer, and every line of code is a small victory.</div>';

        apresentation.appendChild(frase);
        //contactos
        const contactos = document.createElement("div");
        contactos.id = "contactos";
        contactos.innerHTML = `
                                 <button type="button" class="btn btn-outline-primary" id="contacto1">Download CV</button>
                                 <button type="button" class="btn btn-outline-primary" id="contacto2">Projects</button>`;
        frase.appendChild(contactos);

        const botaoDownloadCV = document.getElementById("contacto1");

        // Adiciona um ouvinte de eventos para o clique no botão
        botaoDownloadCV.addEventListener("click", function () {
                // URL do arquivo PDF do currículo
                var fileUrl = 'resources/curriculo.pdf';

                // Cria um elemento <a> temporário fora do DOM
                var link = document.createElement('a');
                link.href = fileUrl;

                // Define o nome do arquivo a ser baixado
                link.download = 'curriculo.pdf';

                // Simula um clique no link para iniciar o download
                link.click();
        });

        //imagem
        const imagemPerfil = document.createElement("div");
        imagemPerfil.id = "imagemPerfil";
        imagemPerfil.innerHTML = '<img src="resources/foto1.jpg" >';
        apresentation.appendChild(imagemPerfil);




        //footer
        const footer = document.createElement("div");
        footer.id = "footer";

        // Criando os botões com imagens
        const buttonlinkdin = document.createElement("a");
        buttonlinkdin.href = "https://www.linkedin.com/in/pedro-gueirez";
        const img1 = document.createElement("img");
        img1.src = "resources/linkedin.png";
        img1.style.width = "3%";
        img1.style.height = "auto";
        buttonlinkdin.appendChild(img1);
        footer.appendChild(buttonlinkdin);

        const buttongithub = document.createElement("a");
        buttongithub.href = "https://github.com/PedroGueirez";
        const img2 = document.createElement("img");
        img2.src = "resources/github.png";
        img2.style.width = "3%";
        img2.style.height = "auto";
        buttongithub.appendChild(img2);
        footer.appendChild(buttongithub);

        const buttongmail = document.createElement("a");
        buttongmail.href = "#/contact";
        const img3 = document.createElement("img");
        img3.src = "resources/gmail.png";
        img3.style.width = "3%";
        img3.style.height = "auto";
        buttongmail.appendChild(img3);
        footer.appendChild(buttongmail);


        container.appendChild(footer);

}
export default { render };