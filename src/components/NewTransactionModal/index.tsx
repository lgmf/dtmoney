import { FormEvent, useState } from 'react';
import { lighten } from 'polished';

import { TransactionForm, TransactionType } from '../../models/Transaction';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Modal } from '../Modal';

import { Form, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<TransactionType>(TransactionType.Income);
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const newTransaction: TransactionForm = {
      title,
      amount,
      type,
      category,
    };

    try {
      await createTransaction(newTransaction);
      onRequestClose();
      setTitle('');
      setAmount(0);
      setType(TransactionType.Income);
      setCategory('');
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          autoFocus
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox activeColor={lighten(0.3, '#33cc95')}>
            <input
              id="income"
              type="radio"
              name="transaction-type"
              value="income"
              checked={type === 'income'}
              onChange={(event) => setType(TransactionType.Income)}
            />
            <label htmlFor="income">
              <img src={income} alt="entrada" />
              Entrada
            </label>
          </RadioBox>

          <RadioBox activeColor={lighten(0.3, '#e52E4d')}>
            <input
              id="outcome"
              type="radio"
              name="transaction-type"
              value="outcome"
              checked={type === 'outcome'}
              onChange={(event) => setType(TransactionType.Outcome)}
            />
            <label htmlFor="outcome">
              <img src={outcome} alt="saída" />
              Saída
            </label>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  )
}