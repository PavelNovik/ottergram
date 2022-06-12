var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
console.log(DETAIL_IMAGE_SELECTOR);
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
console.log(DETAIL_TITLE_SELECTOR);
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
console.log(THUMBNAIL_LINK_SELECTOR);

function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  console.log(detailImage);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  console.log(detailTitle);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}
