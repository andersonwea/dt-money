import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin: 2rem auto;
  max-width: 1120px;
  padding: 0 1.5rem;

  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: none;
    border-radius: 6px;
    padding: 1rem;

    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }

  button {
    padding: 0.875rem 2rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 1px solid ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-500']};
    background-color: transparent;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
