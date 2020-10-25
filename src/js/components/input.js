import templating from '../templating';
import api from '../apiService';
import { mySuccess, myError, myAlert, myNotice } from './notifications';
import createModal from '../basicLightbox';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let page;
let searchQuery = '';
let loading = null;

const fetch = () => {
    loading = true;
    api.fetchPhotos(searchQuery, page).then(({hits, totalHits}) => {
        if (hits.length === 0) return myAlert();
        console.log(page, totalHits, hits);

        const lastPage = Math.ceil(totalHits/12);
        if (page === lastPage) return myNotice();

        templating(hits);
        mySuccess();
        // if (typeof cb === 'function') cb();
        loading = false;
    })
    .catch(error => {
        myError();
        console.log(error);
    });
};

const inputHandler = event => {
    event.preventDefault();

    gallery.innerHTML = '';
    page = 1;
    searchQuery = event.currentTarget.elements.query.value;
    form.reset();
    fetch();
};
const incrementPage = () => page += 1;

const hadleOpenModal = (event) => {
    if (event.target.nodeName !== 'IMG') { return }
    createModal(event.target.dataset.source);
    
};
const onScrollHandler = () => {
    const pxToBottom = document.documentElement.getBoundingClientRect().bottom;
    const clientsViewHeight = document.documentElement.clientHeight;
    if (pxToBottom < (clientsViewHeight+400) && !loading) {
        incrementPage();
        fetch();
    }
};

form.addEventListener('submit', inputHandler);
gallery.addEventListener('click', hadleOpenModal);
window.addEventListener('scroll', onScrollHandler);