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
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `).join('');

  galleryList.innerHTML = galleryMarkup;
}

renderGallery();

// Implement delegation to ul.gallery and handle click events
galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const largeImageUrl = event.target.dataset.source;
    openModal(largeImageUrl);
  }
});

function openModal(imageUrl) {
  const instance = basicLightbox.create(`<img src="${imageUrl}" alt="Full-size Image">`, {
    onShow: (instance) => {
      document.addEventListener('keydown', closeModalOnEscape);
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', closeModalOnEscape);
    },
  });
  instance.show();


   // Optional: Close the modal window on pressing the Escape key
   function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', closeModalOnEscape);
    }
  }

  document.addEventListener('keydown', closeModalOnEscape);
}
