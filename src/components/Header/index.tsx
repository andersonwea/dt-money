import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import IgniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={IgniteLogo} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
