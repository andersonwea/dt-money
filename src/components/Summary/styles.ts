import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 6px;

  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-500']}
  `}
`