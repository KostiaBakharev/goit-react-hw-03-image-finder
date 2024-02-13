import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40997072-7d01e146641751499ce6c78c3',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});
export const searchImages = (q, page = 1) => {
  return instance.get('', { params: { q, page } });
};
