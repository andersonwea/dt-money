import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import IgniteLogo from '../../assets/ignite-logo.svg'

import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={IgniteLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
