import Modal from 'react-modal';
import { Form } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Form>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />

        <input 
          type="number" 
          placeholder="Valor" 
        />

        <input placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  )
}