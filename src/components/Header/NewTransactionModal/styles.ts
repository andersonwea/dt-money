import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  min-width: 34rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 3rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      width: 100%;
      padding: 1rem;
      border-radius: 6px;

      border: none;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-100']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 1.5rem;
      cursor: pointer;

      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => props.theme['green-700']};
        transition: background 0.2s;
      }
    }
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  line-height: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${(props) => props.theme['gray-300']};
`
