import { generateId } from "../utils.js";

export default class Housing {
  constructor({ rooms, availability, image, pricePerMonth, description }) {
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
              <h5 class="card-title mb-1">${this.rooms} - $${this.pricePerMonth}/mo</h5>
              <h6 class="car-subtitle mb-2 text-mute">Available: ${this.availability}</h6>
              <p class="card-text">
               ${this.description}
              </p>              
            </div>
          </div>
        </div>
  
  
    `;
  }
}
