'use strict';
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
// console.log(DETAIL_IMAGE_SELECTOR);
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
// console.log(DETAIL_TITLE_SELECTOR);
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// console.log(THUMBNAIL_LINK_SELECTOR);
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
// console.log(HIDDEN_DETAIL_CLASS);

function setDetails(imageUrl, titleText) {
  const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  // console.log(detailImage);
  detailImage.setAttribute('src', imageUrl);

  const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  // console.log(detailTitle);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log(thumb);
    setDetailsFromThumb(thumb);
  });
}
function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

const elements = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
// console.log(elements);
elements.forEach((el) => {
  addThumbClickHandler(el);
  // console.log(el);
});
