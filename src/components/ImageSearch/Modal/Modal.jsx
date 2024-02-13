import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('click', this.handleClickOverlay);
    window.addEventListener('keydown', this.handleEscKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOverlay);
    window.removeEventListener('keydown', this.handleEscKeyDown);
  }
  handleClickOverlay = e => {
    // console.log(e.target);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  handleEscKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleClickOverlay}>
        <div className="Modal">
          <img src={this.props.imageUwrl} alt={this.props.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
