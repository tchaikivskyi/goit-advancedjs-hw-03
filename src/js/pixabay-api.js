import axios from 'axios';

export const fetchPhotosByQuery = async searchedQuery => {
  const requestParams = {
    key: import.meta.env.VITE_PIXABAY_API,
    image_type: 'photo',
    per_page: 40,
    safesearch: true,
    orientation: 'horizontal',
    q: searchedQuery,
  };

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: requestParams,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `HTTP error! ${error.response?.status || ''} ${error.message}`
    );
  }
};
