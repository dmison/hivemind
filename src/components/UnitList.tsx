// import styles from './UnitList.module.css'
import { iDataCard } from '@/components/DataCard/DataCard.type'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'

export interface UnitListProps {
  datacards: iDataCard[]
  faction: string
}

export default function UnitList ({ datacards, faction }: UnitListProps) {
  
  if (!datacards) return ('loading...')
  return (

    <ListGroup>
      {datacards.map(u =>
        <ListGroup.Item action key={u.name}

        >
          <Link href={`/builder/${faction}/datacard/${u.name}`}>{u.name}</Link>
        </ListGroup.Item> 
        )}
    </ListGroup>
  )
}