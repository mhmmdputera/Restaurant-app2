/* eslint-disable max-len */
import CONFIG from '../../globals/config.js';

const createRestaurantItemTemplate = (restaurant) =>`
          <article class="post-item">
            <img class="post-item__thumbnail"
              src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
              alt="${restaurant.alt}">
              <p class="post-item__city">${restaurant.city}</p>
            <div class="post-item__content">
              <p class="post-item__rating">${restaurant.rating}</p>
              <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
              <p class="post-item__description">${restaurant.description}</p>
            </div>
          </article>
          `;

const createSkeletonRestaurantTemplate = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
            <article class="post-item">
              <div class="card-img-container">
                <img class="card-image" alt="skeleton" src="./images/placeholder-medium.jpg" width="100%" height="250px"/>
              </div>
              <div class="card-content">
                <p class="skeleton">Lorem ipsum dolor sit.</p>
                <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
              </div>
            </article>
              `;
  }
  return skeleton;
};

export {createRestaurantItemTemplate, createSkeletonRestaurantTemplate};
