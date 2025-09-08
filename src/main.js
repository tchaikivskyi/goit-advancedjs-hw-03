import { fetchPhotosByQuery } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import { errorTost, infoTost } from './js/tost';

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
};

const onSearchFormSubmit = async event => {
  event.preventDefault();
  const searchedQuery = event.target.elements.search.value.trim();

  if (!searchedQuery) {
    infoTost('Input please any word!');
    return;
  }

  refs.loader.classList.add('active');
  clearGallery();

  try {
    const data = await fetchPhotosByQuery(searchedQuery);

    if (data.totalHits === 0) {
      errorTost(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderGallery(data.hits);
  } catch (err) {
    errorTost('Error fetching photos. Try again!');
  } finally {
    refs.loader.classList.remove('active');
  }
};

refs.form.addEventListener('submit', onSearchFormSubmit);
