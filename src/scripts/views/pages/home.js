/* eslint-disable max-len */
import RestaurantSource from '../../data/restaurant-source.js';
import {createRestaurantItemTemplate} from '../templates/template-creator.js';

const Home = {
  async render() {
    return `
    
      <section class="content">
        <div class="latest">
          <h1 class="latest__label">Explore Restaurant</h1>
          <div id="maincontent" class="posts">
        
          </div>
        </div>
      </section>
     
      `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.getElementById('maincontent');
    restaurantContainer.innerHTML = '';
    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
