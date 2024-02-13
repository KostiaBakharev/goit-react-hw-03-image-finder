import React, { Component } from 'react';
import Modal from '../../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li className="ImageGalleryItem" id={id}>
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={this.openModal}
          />
        </li>
        {showModal && (
          <Modal
            imageUrl={largeImageURL}
            tags={tags}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
