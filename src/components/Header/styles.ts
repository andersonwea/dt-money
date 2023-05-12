import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2.5rem 0 7.5rem;

  background-color: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  font-weight: bold;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.25s;
  }
`
