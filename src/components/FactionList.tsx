// import styles from './FactionList.module.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from 'next/link'
export interface FactionListProps {
  factions: any
  isLoading: Boolean
}

export default function FactionList ({ factions, isLoading }: FactionListProps) {
    if ( !factions || isLoading ) return <div>Loading...</div>
      return (
        <ListGroup>
      {Object.keys(factions).map(f =>
        <ListGroup.Item
          key={f} action>
          <Link href={`/builder/${f}`}>{factions[f].name}</Link>
        </ListGroup.Item>
      )}
        </ListGroup>
  )
}