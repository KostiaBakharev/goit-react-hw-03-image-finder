import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { searchImages } from '../../api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';

class ImageSearch extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.FetchImages();
    }
  }

  async FetchImages() {
    const { search, page } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const { data } = await searchImages(search, page);
      this.setState(prevState => ({
        images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  handleSearch = ({ search }) => {
    this.setState({
      images: [],
      search,
      page: 1,
    });
  };
  loadMoreImg = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  render() {
    const { handleSearch, loadMoreImg } = this;
    const { images, loading, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {error && <p className="error">Error fetching images: {error}</p>}
        {loading && <Loader />}
        <ImageGallery data={images} />
        {Boolean(images.length) && (
          <Button onClick={loadMoreImg}>Load more</Button>
        )}
      </>
    );
  }
}

export default ImageSearch;
