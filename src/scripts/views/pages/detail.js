import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
const Detail = {
  async render() {
    return `
    <h2 tabindex="0" class="explore-restaurant__label">Detail Restuarant</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
