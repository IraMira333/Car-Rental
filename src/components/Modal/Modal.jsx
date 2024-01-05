import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

import { ModalContainer, BackDrop, CloseButton } from './Modal.styled';

const Modal = ({ closeModal, children, style }) => {
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <BackDrop onClick={handleBackDropClick}>
      <ModalContainer style={style}>
        <CloseButton onClick={closeModal}>
          <IoClose width={24} height={24} />
        </CloseButton>
        {children}
      </ModalContainer>
    </BackDrop>,
    document.querySelector('#root')
  );
};

export default Modal;
