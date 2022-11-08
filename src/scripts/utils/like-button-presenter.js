import swal from 'sweetalert2';
import {
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer,
    favoriteRestos,
    resto,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    this._favoriteRestos = favoriteRestos;

    await this._renderButton();
  },

  async _renderButton() {
    const {
      id,
    } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await this._favoriteRestos.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // eslint-disable-next-line no-undef, new-cap
      new swal({
        title: 'Notification',
        text: 'Successfully Added To Favorite Menu',
        position: 'center',
        background: 'white',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCancelButton: false,
        timer: 3000,
      });
      await this._favoriteRestos.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // eslint-disable-next-line no-undef, new-cap
      new swal({
        title: 'Notification',
        text: 'successfully Remove from favorite menu',
        position: 'center',
        background: 'white',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCancelButton: false,
        timer: 3000,
      });
      await this._favoriteRestos.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;