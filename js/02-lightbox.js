import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

// Render gallery items from galleryItems array
function renderGallery() {
  const galleryMarkup = galleryItems.map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `).join('');

  galleryList.innerHTML = galleryMarkup;
}

renderGallery();

// Initialize SimpleLightbox after the gallery is created
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
