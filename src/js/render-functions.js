import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
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

export const clearGallery = () => {
  refs.gallery.innerHTML = '';
};

export const renderGallery = hits => {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="card">
          <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="stats">
              <div><span>${likes}</span> Likes</div>
              <div><span>${views}</span> Views</div>
              <div><span>${comments}</span> Comments</div>
              <div><span>${downloads}</span> Downloads</div>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  refs.gallery.innerHTML = markup;
  lightbox.refresh();
};
