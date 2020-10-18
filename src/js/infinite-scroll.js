const elem = document.querySelector('.gallery');
const infScroll = new InfiniteScroll( elem, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});

// // element argument can be a selector string
// //   for an individual element
// const infScroll = new InfiniteScroll( '.gallery', {
//   // options
// });