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
        if (event.target) {
             const instance = basicLightbox.create(         
            `<img src="${event.target.dataset.source}" width="800" height="600">`
             )
            instance.show(() => galleryEl.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
        instance.close()
        console.log(event)
    }
}))
        }
    
    
}
    

galleryEl.addEventListener("click", getLargeImg)
// galleryEl.addEventListener("keydown", closeModal )