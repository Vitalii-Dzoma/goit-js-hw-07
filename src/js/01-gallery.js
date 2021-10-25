import { galleryItems } from './gallery-items.js';
// import { instance } from './basicLightBox.js'; 
// Change code below this line
const galleryEl = document.querySelector('.gallery')


const createGalleryElements = function (object) {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
   `).join('')
}
galleryEl.insertAdjacentHTML('afterbegin', createGalleryElements(galleryItems))




const getLargeImg = function (event) {
    event.preventDefault();
    const ImgUrl = galleryEl.querySelector("[data-source]");
    const imgUrlValue = ImgUrl.dataset.source;
        const instance = basicLightbox.create(`
    <img src="${imgUrlValue}" width="800" height="600">
`)
    
    instance.show()
    console.log(event)
}
// instance.close()
galleryEl.addEventListener("click", getLargeImg)