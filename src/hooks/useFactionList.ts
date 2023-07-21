import useSWR from 'swr'

export function useFactionList () {
  const fetcher = async (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR('/api/factions', fetcher)

  return {
    factions: data,
    isLoading: isLoading,
    error: error
  }
}
