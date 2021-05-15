import { useEffect, useState } from "react";

import HttpClient from "../../http-client";

import { Container } from "./styles";

const currencyFormatter =  new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const dateFormatter =  new Intl.DateTimeFormat('pt-BR')

export function TransactionsTable() {
  const [status, setStatus] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setStatus('pending');

    HttpClient
      .get('/transactions')
      .then((response) => {
        setTransactions(response.data.transactions);
        setStatus('fulfilled');
      })
      .catch(() => setStatus('rejected'));
  }, []);

  function renderRows() {
    if (status === 'rejected') {
      return (
        <tr>
          <td colSpan={4} align="center">
            <p className="error-message">
              Erro inesperado. Tente novamente mais tarde
            </p>
          </td>
        </tr>
      )
    }

    if (!transactions.length) {
      return (
        <tr>
          <td colSpan={4} align="center">
            Nenhuma transação encontrada
          </td>
        </tr>
      );
    }

    return (
      transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td className="title">{transaction.title}</td>
          <td className={transaction.type}>
            {currencyFormatter.format(transaction.amount)}
          </td>
          <td>{transaction.category}</td>
          <td>
            {dateFormatter.format(new Date(transaction.createdAt))}
          </td>
        </tr>
      ))
    );
  }

  if (status === 'pending') {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </Container>
  )
}