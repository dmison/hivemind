import styles from './WeaponRow.module.css'
import { iWeapon } from '@/components/DataCard/DataCard.type'

export interface WeaponRowProps {
  key: string
  stats: iWeapon
}

export default function WeaponRow ({ key, stats }: WeaponRowProps) {
  return (
    <tr key={key}>
      <td>{stats[0]} {stats[1].length ? <span className={styles.small}>[{stats[1].map(w => w)}]</span> : ''}</td>
      <td>{stats[2]}</td>
      <td>{stats[3]}</td>
      <td>{stats[4]}</td>
      <td>{stats[5]}</td>
      <td>{stats[6]}</td>
      <td>{stats[7]}</td>
    </tr>
  )
}