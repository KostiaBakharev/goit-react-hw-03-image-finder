import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  const images = data.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      id={id}
      tags={tags}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
    />
  ));

  return <ul className="ImageGallery">{images}</ul>;
};
export default ImageGallery;
