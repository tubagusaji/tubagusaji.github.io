import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL('large') + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <hr>
    <table>
      <tr>
        <td><h4>Alamat</h4></td>
        <td><h4>Kategori</h4></td>
      </tr>
      <tr>
      <td><p>${resto.address}</p></td>
      <td><p>${resto.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}</p></td>
      </tr>
      <tr>
      <td><h4>Kota</h4></td>
      <td><h4>Rating</h4></td>
      </tr>
      <tr>
      <td><p>${resto.city}</p></td>
      <td><p>${resto.rating}</p></td>
      </tr>
      <tr>
      <td><h4>Menu Makanan</h4></td>
      <td><h4>Menu Minuman</h4></td>
      </tr>
      <tr>
      <td><p> ${resto.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}</p></td>
      <td><p> ${resto.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}</p></td>
      </tr>
    </table>
  </div>
  <div class="resto__overview">
    <h2>Overview</h2>
    <p>${resto.description}</p>
  <div id="review">
  <h2>Consumer Review</h2>
  ${resto.customerReviews.map((review) => `
    <h3>${review.name}, <span class="date">${review.date}</span></h3>
    <p>${review.review}</p>
      `).join('')}
  </div>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div tabindex="0" class="resto-item">
    <a href="/#/detail/${resto.id}">
      <div class="resto-item__header skeleton">
      <img tabindex="0" class="lazyload resto-item__header__poster" alt="${resto.name}"
      data-src="${CONFIG.BASE_IMAGE_URL('small') + resto.pictureId}">
      <div tabindex="0" class="resto-item__header__rating skeleton">${resto.city}
      </div>
      </div>
      <div tabindex="0" class="resto-item__content">
      <p class="list_item_rating skeleton">Rating : ⭐️ <span class="list_item_rating_value skeleton" tabindex="0">${resto.rating}</span>
      </p>
        <h2 class="resto__title skeleton">${resto.name}</h2>
        <p class="skeleton">${resto.description}</p>
      </div>
    </a>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
