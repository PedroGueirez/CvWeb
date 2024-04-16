import perfilService from "/js/service/perfilService.js";
import perfilView from "/js/view/perfilView.js";

async function init(){
    const perfis = await perfilService.getPerfis();
    perfilView.render(perfis);
}
export default {init};