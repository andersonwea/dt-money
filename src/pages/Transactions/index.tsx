import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <>
      <Header />
      <Summary />

      <SearchForm />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            {transactions &&
              transactions.map((transaction) => {
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
