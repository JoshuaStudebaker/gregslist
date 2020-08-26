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
      // @ts-ignore
      rooms: form.rooms.value,
      // @ts-ignore
      pricePerMonth: form.pricePerMonth.value,
      // @ts-ignore
      availability: form.availability.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      image: form.image.value,
    };

    housingService.addHousing(newHouse);
    _drawHousing();
  }
  displayHousing() {
    let element = document.getElementById("housing-display");
    element.classList.remove("d-none");
    let elem2 = document.getElementById("car-display");
    elem2.classList.add("d-none");
  }
}
