// import HousingService from "../Services/HousingService.js";
import STORE from "../store.js";

function _drawHousing() {
  let housing = STORE.State.houses;
  let template = "";
  housing.forEach((n) => (template += n.Template));
  document.getElementById("housing").innerHTML = template;
}

export default class HousingController {
  constructor() {
    _drawHousing();
  }
}
