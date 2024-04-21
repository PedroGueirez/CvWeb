import educationService from "/js/service/educationService.js";
import educationView from "/js/view/educationView.js";

async function init(){
    const infos = await educationService.getInfos();
    educationView.render(infos);
}
export default {init};