import useSWR from 'swr'
import { iFaction } from '@/types/iFaction.type'

export function useFaction (faction?: string): { faction: iFaction, isLoading: boolean, error: unknown } {
  const fetcher = async (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(faction ? `/api/factions/${faction}` : null, fetcher)
  return {
    faction: data,
    isLoading: isLoading,
    error: error
  }
}
