import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionType } from '../../models';

import { useTransactions } from '../../hooks/useTransactions';
import { currencyFormatter } from '../../utils';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((summary, transaction) => {
    if (transaction.type === TransactionType.Income) {
      summary.income += transaction.amount;
      summary.total += transaction.amount;
    } else {
      summary.outcome += transaction.amount;
      summary.total -= transaction.amount;
    }

    return summary;
  }, { income: 0, outcome: 0, total: 0 })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>
          {currencyFormatter.format(summary.income)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saídas" />
        </header>
        <strong>
          {currencyFormatter.format(summary.outcome)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {currencyFormatter.format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}