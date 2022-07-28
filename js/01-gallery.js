import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const cardMarkup = createGallryMarkup(galleryItems);
container.insertAdjacentHTML("beforeend", cardMarkup);
container.addEventListener("click", onGalleryClick);

function createGallryMarkup(galleryItems) {
  return galleryItems
    .map((el) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const onGalleryClick = (event) => {
  event.preventDefault();
  //   const instance = basicLightbox.create(
  //     `<img source = ${event.target.dataset.source}/>`
  //   );
  //   instance.show();
};

console.log(createGallryMarkup(galleryItems));
// console.log(galleryItems);
