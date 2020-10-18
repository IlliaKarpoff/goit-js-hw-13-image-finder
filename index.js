// const getUserFriends = async () => {
//   const user = await fetch('https://jsonplaceholder.typicode.com/users');
//   const idList = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/friends`);
//   // const promises = idList.map(id => fetch(`/users/${id}`));
//   return idList;
//   // const friends = await Promise.all(promises);

//   // return friends;
// };

// // Асинхронная функция всегда вернет промис
// const promise = getUserFriends();
// promise.then(friends => console.log(friends))
// .catch(error => console.log(error));

import templating from '../templating';
import api from '../apiService';

const input = document.querySelector('.input');
// console.log(input);
const inputHandler = event => {
    event.preventDefault();
    const searchQuery = event.target.value;
    console.log(event.target.value);
    // console.log(1);
    // return event.target.value;
    api.loadHandler(searchQuery).then(data => templating(data));

    // return searchQuery;
};

input.addEventListener('blur', inputHandler);
// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
// import searchQuery from './components/input';
const searchQuery = 'dog';
let page = 1;
const apiKey = '18696282-10abbe1da21bbb12af841a1f3';

const loadHandler = (searchQuery) => {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
    return fetch(url).then(res => res.json());
};
// const loadHandler = async () => {
//     const res = await fetch(url);
//     return await res.json();
// };

export default { loadHandler };