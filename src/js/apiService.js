const apiKey = '18696282-10abbe1da21bbb12af841a1f3';

// // код для запуска promise
// const fetchPhotos = (searchQuery, page = 1) => {
//   const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
//   return fetch(url).then(res => res.json());
// };

// // код для запуска async
const fetchPhotos = async (searchQuery, page = 1) => {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
  const res = await fetch(url);
  return await res.json();
};

export default { fetchPhotos };