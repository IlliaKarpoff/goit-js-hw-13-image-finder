// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
// import searchQuery from './components/input';

const apiKey = '18696282-10abbe1da21bbb12af841a1f3';

const fetchPhotos = (searchQuery, page = 1) => {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
    return fetch(url).then(res => res.json());
};
// const loadHandler = async () => {
//     const res = await fetch(url);
//     return await res.json();
// };

export default { fetchPhotos };