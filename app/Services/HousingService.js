import Housing from "../Models/Housing.js";
import STORE from "../store.js";

class HousingService {
  addHouse() {
    let newApt = new Housing();
    STORE.State.houses.push();
  }
}
const SERVICE = new HousingService();
export default SERVICE;
