import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import HttpClient from "./http-client";
import { Transaction, TransactionForm } from "./models";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextValue {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  transactions: Transaction[];
  createTransaction: (transaction: TransactionForm) => Promise<AxiosResponse<any>>;
}

const initialValue: TransactionsContextValue = {
  status: 'idle',
  transactions: [],
  createTransaction: () => Promise.resolve({} as AxiosResponse)
};

const TransactionsContext = createContext<TransactionsContextValue>(initialValue);

export function useTransactions() {
  return useContext(TransactionsContext);
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [status, setStatus] = useState(initialValue.status);
  const [transactions, setTransactions] = useState<Transaction[]>(initialValue.transactions);

  const createTransaction = useCallback((transactionForm: TransactionForm) => {
    return HttpClient
      .post('/transactions', transactionForm)
      .then((response) => {
        const { transaction } = response.data;
        setTransactions((prev) => ([
          ...prev,
          transaction
        ]));
        return response;
      });
  }, []);

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

  const value: TransactionsContextValue = {
    status,
    transactions,
    createTransaction,
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  )
}