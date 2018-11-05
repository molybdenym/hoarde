// Modules
import * as React from 'react';
// Libs
// Components
// Styles
import styles from '../styles/Modal.css';
// Types
type Props = {
  handleClose?: () => void,
  children?: JSX.Element | string,
};


export class Modal extends React.Component<Props, {}> {
  handleKeyUp = (e: KeyboardEvent) => {
    const { handleClose } = this.props;
    if (e.keyCode === 27 && handleClose) handleClose();
  }

  handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    const { handleClose } = this.props;
    if (e.currentTarget.id === 'dimmer' && handleClose) handleClose();
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
              className={`fas fa-times ${styles.dialogClose}`}
              onClick={handleClose}
            />
          }
          {children}
        </div>
      </div>
    );
  }
}
