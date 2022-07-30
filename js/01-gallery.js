import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const cardMarkup = createGalleryMarkup(galleryItems);
container.insertAdjacentHTML("beforeend", cardMarkup);
let instance;
container.addEventListener("click", onGalleryClick);

function createGalleryMarkup(items) {
  return items
    .map((item) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscCloseImage);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscCloseImage);
      },
    }
  );
  instance.show();
}

function onEscCloseImage(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}
