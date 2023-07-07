import styles from './FactionList.module.css'
// import tau from '@/data/tau-empire.json'
// import tyranids from '@/data/tyranids.json'

export interface FactionListProps {
  factions: any
  selected: string
  onSelect: any
  isLoading: Boolean
}

export default function FactionList ({ factions, selected, onSelect, isLoading }: FactionListProps) {
    if ( !factions || isLoading ) return <div>Loading...</div>
      return (
    <ul className={styles.factions}>
      {Object.keys(factions).map(f =>
        <li key={f}  className={selected === f ? styles.selected : ''} onClick={()=>onSelect(f)}>{ factions[f]['name'] }</li>
        )}
    </ul>
  )
}