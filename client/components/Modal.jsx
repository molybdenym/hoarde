/* @flow */

import React from 'react';

import styles from '../styles/Modal.css';


type Props = {
  handleClose?: () => void,
  children?: React$Element<*>,
};

class Modal extends React.Component {
  props: Props;

  handleKeyUp = (e: KeyboardEvent) => {
    const { handleClose } = this.props;
    if (e.keyCode === 27 && handleClose) handleClose();
  }

  handleClickOutside = (e: SyntheticInputEvent) => {
    const { handleClose } = this.props;
    if (e.target.id === 'dimmer' && handleClose) handleClose();
  }

  componentDidMount() {
    const el = document.body;
    if (el) el.classList.add('noScroll');
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    const el = document.body;
    if (el) el.classList.remove('noScroll');
    document.removeEventListener('keyup', this.handleKeyUp);
  }


  render() {
    const { handleClose, children } = this.props;
    return (
      <div id="dimmer" className={styles.dimmer} onClick={this.handleClickOutside}>
        <div className={styles.dialog}>
          {handleClose &&
            <i
              className={`fa fa-close ${styles.dialogClose}`}
              onClick={handleClose}
            />
          }
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
