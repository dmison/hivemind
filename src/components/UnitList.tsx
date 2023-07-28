'use client'
import { iDataCard } from '@/components/DataCard/DataCard.type'
import ListGroup from 'react-bootstrap/ListGroup'
import { useFaction } from '@/hooks/useFaction'
import Link from 'next/link'

export interface UnitListProps {
  faction_key: string
}

export default function UnitList ({ faction_key }: UnitListProps) {
  const { faction, error, isLoading } = useFaction(faction_key)
  if (!faction && isLoading) return ('loading...')
  return (
    <ListGroup>
      {faction?.datacards.map(u =>
        <ListGroup.Item action key={u.name} >
          <Link href={`/builder/${faction_key}/datacard/${u.name}`}>{u.name}</Link>
        </ListGroup.Item> 
        )}
    </ListGroup>
  )
}