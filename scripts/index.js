'use strict';
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
// console.log(DETAIL_IMAGE_SELECTOR);
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
// console.log(DETAIL_TITLE_SELECTOR);
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';

const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// console.log(THUMBNAIL_LINK_SELECTOR);
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
// console.log(HIDDEN_DETAIL_CLASS);
const TINY_EFFECT_CLASS = 'is-tiny';

const ESC_KEY = 27;

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
    showDetails();
  });
}
function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  const frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  document.body.addEventListener('keyup', function (e) {
    e.preventDefault();
    // console.log(e.keyCode);
    // console.log(e);
    if (e.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
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
  addKeyPressHandler();

  // Gold ex page 164
  // console.log(thumbnails[randomNum()]);
  // thumbnails[randomNum()].setAttribute(
  //   'data-image-url',
  //   'https://tacocataugusta.com/wp-content/uploads/2021/07/cropped-TC-Favicon-01.png'
  // );
}

initializeEvents();

// Gold ex page 164
// function randomNum() {
//   const numLink = Math.trunc(Math.random() * 5);
//   console.log(numLink);
//   return numLink;
// }
