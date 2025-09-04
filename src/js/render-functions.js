export const createGalleryCardTemplate = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
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
  `;
};
