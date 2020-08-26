import Housing from "../Models/Housing.js";
import STORE from "../store.js";

class HousingService {
  addHousing(newHouse) {
    let apt = new Housing(newHouse);
    STORE.State.houses.push(apt);
  }
}
const SERVICE = new HousingService();
export default SERVICE;
