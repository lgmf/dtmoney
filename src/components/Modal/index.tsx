import ReactModal from 'react-modal';

import close from '../../assets/close.svg';
import { CloseModalButton } from './styles';

interface ModalProps extends ReactModal.Props {
  children: any;
  withCloseButton?: boolean;
}

export function Modal(props: ModalProps) {
  const {
    children,
    onRequestClose,
    withCloseButton = true,
    ...rest
  } = props;

  return (
    <ReactModal
      {...rest}
      onRequestClose={onRequestClose}

      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      {
        withCloseButton && (
          <CloseModalButton onClick={onRequestClose}>
            <img src={close} alt="fechar modal" />
          </CloseModalButton>
        )
      }

      {children}
    </ReactModal>
  )
}
