import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

const cardMarkup = createGalleryMarkup(galleryItems);
container.insertAdjacentHTML("beforeend", cardMarkup);

function createGalleryMarkup(items) {
  return items
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
