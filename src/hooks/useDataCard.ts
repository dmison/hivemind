import useSWR from 'swr'

// http://0.0.0.0:3000/api/factions/tau/datacards/Commander%20Shadowsun
import { iDataCard } from '@/components/DataCard/DataCard.type'

export function useDatacard (faction: string, name: string): { data: iDataCard, isLoading: boolean, error: unknown } {
  const fetcher = async (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(faction && name ? `/api/factions/${faction}/datacards/${name}` : null, fetcher)
  return {
    data,
    isLoading,
    error
  }
}
