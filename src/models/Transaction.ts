export enum TransactionType {
  Income = 'income',
  Outcome = 'outcome',
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  createdAt: Date;
}

export type TransactionForm = Omit<Transaction, 'id' | 'createdAt'>;
