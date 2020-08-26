import housingService from "../Services/HousingService.js";
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

  addHousing() {
    event.preventDefault();
    let form = event.target;
    let newHouse = {
      rooms: form.rooms.value,
      pricePerMonth: form.pricePerMonth.value,
      availability: form.availability.value,
      description: form.description.value,
      image: form.image.value,
    };

    housingService.addHousing(newHouse);
    _drawHousing();
  }
}
