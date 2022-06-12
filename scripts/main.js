'use strict';
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
// console.log(DETAIL_IMAGE_SELECTOR);
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
// console.log(DETAIL_TITLE_SELECTOR);
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// console.log(THUMBNAIL_LINK_SELECTOR);
var HIDDEN_DETAIL_CLASS = 'hidden-detail';

function setDetails(imageUrl, titleText) {
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  console.log(detailImage);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  console.log(detailTitle);
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
    setDetailsFromThumb(thumb);
  });
}
function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
