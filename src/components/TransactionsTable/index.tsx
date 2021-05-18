import { useTransactions } from "../../TransactionContext";
import { currencyFormatter, dateFormatter } from "../../utils";
import { Container } from "./styles";

export function TransactionsTable() {
  const { status, transactions } = useTransactions();

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