import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { useTransactions } from '../../TransactionContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}