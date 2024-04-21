import experienceService from "/js/service/experienceService.js";
import experienceView from "/js/view/experienceView.js";

async function init(){
    const infos = await experienceService.getInfos();
    experienceView.render(infos);
}
export default {init};