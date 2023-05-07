/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint.js';

// eslint-disable-next-line require-jsdoc
class RestaurantSource {
  // eslint-disable-next-line require-jsdoc
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const data = await response.json();
    return data.restaurants;
  }

  // eslint-disable-next-line require-jsdoc
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
  }
}
export default RestaurantSource;
