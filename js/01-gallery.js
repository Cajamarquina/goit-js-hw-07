import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

  // Function to create the gallery item template
  function createGalleryItemTemplate(item) {
    return `
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
    `;
  }

  // Render the gallery
  function renderGallery() {
    const galleryMarkup = galleryItems.map(createGalleryItemTemplate).join('');
    galleryList.innerHTML = galleryMarkup;
  }

  // Open the modal with the full-size image
  function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;

    const largeImageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${largeImageUrl}">`);
    instance.show();

    // Close the modal on pressing the Escape key
    function closeModalOnEsc(event) {
    if (event.key === 'Escape') {
    instance.close();
  }
 }
  
    instance.show();

  // Enable keyboard listening while the modal window is open
    document.addEventListener('keydown', closeModalOnEsc);
    }

  // Attach event listener for the click event on the gallery list
  galleryList.addEventListener('click', openModal);

  // Render the initial gallery
  renderGallery();

console.log(galleryItems);
