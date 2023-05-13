import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

interface Transaction {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      setTransactions(data)
      console.log(data)
    }

    loadTransactions()
  }, [])

  return (
    <>
      <Header />
      <Summary />

      <SearchForm />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHightLight>
                  </td>
                  <td>{transaction.type}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
