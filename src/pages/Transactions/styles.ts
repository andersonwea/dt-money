import { styled } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  margin: 3rem auto;
  padding: 0 1.5rem;
  max-width: 1120px;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; */

  td {
    padding: 1.25rem 2rem;

    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHightLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHightLight = styled.span<PriceHightLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
