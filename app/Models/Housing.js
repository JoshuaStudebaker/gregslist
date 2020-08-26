import { generateId } from "../utils.js";

export default class Housing {
  /**
   *
   * @param {*} image
   * @param {*} rooms
   * @param {Date} availability
   * @param {Number} pricePerMonth
   * @param {String} description
   */
  constructor(rooms, availability, image, pricePerMonth, description) {
    this.rooms = rooms;
    this.availability = availability;
    this.image = image;
    this.pricePerMonth = pricePerMonth;
    this.description = description;
    this.id = generateId();
    // this.amenities = amenities;
  }

  get Template() {
    return `
  <div class="col-4">
          <div class="card">
            <img class="card-img-top" src="${this.image}" alt="" />
            <div class="card-body">
              <h5 class="card-title">${this.rooms} - ${this.pricePerMonth}</h5>
              <h6 class="car-subtitle mb-2 text-mute">${this.availability}</h6>
              <p class="card-text">
               ${this.description}
              </p>              
            </div>
          </div>
        </div>
  
  
    `;
  }
}
