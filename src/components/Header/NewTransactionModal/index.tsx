import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form>
          <input type="text" placeholder="Descrição" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
        <Close>
          <X size={20} />
        </Close>
      </Content>
    </Dialog.Portal>
  )
}
