export const fetchPhotosByQuery = searchedQuery => {
  const requestParams = new URLSearchParams({
    key: import.meta.env.VITE_PIXABAY_API,
    image_type: 'photo',
    per_page: 40,
    safesearch: true,
    orientation: 'horizontal',
    q: searchedQuery,
  });

  return fetch(`https://pixabay.com/api/?${requestParams}`).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};
