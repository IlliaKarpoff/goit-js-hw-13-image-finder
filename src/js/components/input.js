import templating from '../templating';
import api from '../apiService';

const input = document.querySelector('.input');
const searchBtn = document.querySelector('.searchBtn');
const gallery = document.querySelector('.gallery');
const loadButton = document.querySelector('.loadButton');

let page = 1;
let searchQuery = '';
let vh = 1500;

const inputHandler = event => {
    event.preventDefault();
    page = 1;
    searchQuery = event.target.value;
    console.log(searchQuery);
    gallery.innerHTML = '';
    api.fetchPhotos(searchQuery, page).then(({hits}) => {
        console.log(hits);
        templating(hits);
    });
};
input.addEventListener('blur', inputHandler);

const buttonHandler = () => {
    page += 1;
    console.log(page);
    scrollTo(0, vh*(page-1)); // ????
    api.fetchPhotos(searchQuery, page).then(({hits}) => {
        console.log(hits);
        templating(hits);
    });
};
loadButton.addEventListener('click', buttonHandler);

// const inputHandler = event => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     // console.log(event.currentTarget);
//     const searchQuery = form.elements.query.value;
//     // console.log(form.elements.query.value);
//     // console.log(searchQuery);

//     articlesContainer.innerHTML = ''; // ?????
//     form.reset();

//     page = 1;
//     api.fetchPhotos(searchQuery, page).then(photos => {
//     console.log(photos);
//     templating(photos);
//     page += 1;
//     });
// };
// input.addEventListener('submit', inputHandler);


// const loadMoreButton = document.querySelector('.loadButton');

// const buttonHandler = () => {
//     page += 1;
//     console.log(page);
//      api.fetchPhotos(searchQuery, page).then(photos => {
//         console.log(photos);
//         templating(photos);
//         page += 1;
//         });
// };
// loadMoreButton.addEventListener('click', buttonHandler);




