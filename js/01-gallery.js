import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

// Implement delegation to ul.gallery and handle click events
galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const largeImageUrl = event.target.dataset.source;
    openModal(largeImageUrl);
  }
});

// Open the modal window
function openModal(imageUrl) {
  const instance = basicLightbox.create(`<img src="${imageUrl}" alt="Full-size Image">`);
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
