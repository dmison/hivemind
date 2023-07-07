import styles from './UnitList.module.css'
import { iDataCard } from '@/components/DataCard.type'

export interface UnitListProps {
  datacards: iDataCard[]
  selected: string
  onSelect: any
}

export default function UnitList ({ datacards, selected, onSelect }: UnitListProps) {
  
  return (
    <ul className={styles.units}>
      {datacards.map(u =>
        <li key={u.name} className={selected === u.name ? styles.selected : ''} onClick={()=>onSelect(u.name)}>{ u.name }</li>
        )}
    </ul>
  )
}