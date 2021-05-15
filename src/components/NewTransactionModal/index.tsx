import { FormEvent, useState } from 'react';
import { lighten } from 'polished';

import { Modal } from '../Modal';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Form, TransactionTypeContainer, RadioBox } from './styles';
import HttpClient from '../../http-client';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

enum TransactionType {
  Income = 'income',
  Outcome = 'outcome',
}

interface Transaction {
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  createdAt: Date;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<TransactionType>(TransactionType.Income);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const newTransaction: Transaction = {
      title,
      amount,
      type,
      category,
      createdAt: new Date(),
    };

    HttpClient.post('/transactions', newTransaction);
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