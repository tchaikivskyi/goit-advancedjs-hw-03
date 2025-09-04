import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';
import { errorTost, infoTost } from './js/tost';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('#form-search'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  doubleTapZoom: 1,
  maxZoom: 1,
  fadeSpeed: 250,
  widthRatio: 0.85,
});

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedQuery = event.target.elements.search.value.trim();

  if (!searchedQuery) {
    infoTost('Input please any word!');
    return;
  }

  refs.loader.classList.add('active');
  refs.gallery.innerHTML = '';

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.totalHits === 0) {
        errorTost(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      const galleryCardsTemplate = data.hits
        .map(pictureInfo => createGalleryCardTemplate(pictureInfo))
        .join('');

      refs.gallery.innerHTML = galleryCardsTemplate;
      lightbox.refresh();
    })
    .catch(err => {
      errorTost('Error fetching photos. Try again!');
    })
    .finally(() => {
      refs.loader.classList.remove('active');
    });
};

refs.form.addEventListener('submit', onSearchFormSubmit);
