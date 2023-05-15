import * as Dialog from '@radix-ui/react-dialog'

import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import * as z from 'zod'

const newFormTransactionSchemma = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
})

type NewFormTransactionForm = z.infer<typeof newFormTransactionSchemma>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewFormTransactionForm>()

  async function handleNewFormTransaction(data: NewFormTransactionForm) {
    await new Promise((resolve) => setInterval(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleNewFormTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input type="number" placeholder="Preço" {...register('price')} />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
        <Close>
          <X size={20} />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}
