'use strict';
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
// console.log(DETAIL_IMAGE_SELECTOR);
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
// console.log(DETAIL_TITLE_SELECTOR);
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// console.log(THUMBNAIL_LINK_SELECTOR);
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
// console.log(HIDDEN_DETAIL_CLASS);

// change big image
function setDetails(imageUrl, titleText) {
  const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  // console.log(detailImage);
  detailImage.setAttribute('src', imageUrl);

  const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  // console.log(detailTitle);
  detailTitle.textContent = titleText;
}

// extract URL address from data atribute
function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
}

// extract Title from data atribute
function titleFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-title');
}

// combinate two top functions
function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
  // Next code for npm dev
  // setDetails(thumbnail.href, titleFromThumb(thumbnail));
}

// add event listener for thumbnail
function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log(event.target);
    setDetailsFromThumb(thumb);
  });
}
function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

// const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
// // console.log(thumbnails);
// elements.forEach((thumb) => {
//   addThumbClickHandler(thumb);
//   // console.log(thumb);
// });

// top code is alternative

function getThumbnailsArray() {
  const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  const thumbnailArray = [].slice.call(thumbnails);

  return thumbnailArray;
}

function initializeEvents() {
  const thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
