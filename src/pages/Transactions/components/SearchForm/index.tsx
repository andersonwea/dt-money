import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchemma = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchemma>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchemma),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setInterval(resolve, 2000))

    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
