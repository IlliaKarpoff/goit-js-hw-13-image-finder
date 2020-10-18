import formTemplate from '../templates/form.hbs';
import buttonTemplate from '../templates/button.hbs';
import galleryTemplate from '../templates/gallery.hbs';
import cardsTemplate from '../templates/photo-card.hbs';


const body = document.querySelector('body');

body.insertAdjacentHTML('beforeend', formTemplate());
body.insertAdjacentHTML('beforeend', galleryTemplate());
body.insertAdjacentHTML('beforeend', buttonTemplate());


const templating = (photos) => {
    
// const markup = cardsTemplate(data);
// gallery.insertAdjacentHTML('beforeend', markup);

    const gallery = body.querySelector('.gallery');
    gallery.insertAdjacentHTML('beforeend', cardsTemplate(photos));
    
    console.log(gallery);
    
};

export default templating;