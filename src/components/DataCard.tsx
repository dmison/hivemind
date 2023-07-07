import styles from './DataCard.module.css'

import { iDataCard } from '@/components/DataCard.type'

export default function DataCard ({ data, colour }: { data: iDataCard, colour: [string, string] }) {
  const s = { "background-color": colour[1], "color": colour[0] }
  return (
    <div className={styles.datacard}>
      <h1 style={s}>{data.name}</h1>
      {data?.stats ?
        <table className={ styles.stats }>
          <thead>
          <tr>
            <td>M</td>
            <td>T</td>
            <td>Sv</td>
            <td>W</td>
            <td>Ld</td>
            <td>OC</td>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>{data.stats[0]}</td>
            <td>{data.stats[1]}</td>
            <td>{data.stats[2]}</td>
            <td>{data.stats[3]}</td>
            <td>{data.stats[4]}</td>
            <td>{data.stats[5]}</td>
            </tr>
          </tbody>
        </table> : ''}
      {data?.ranged ? 
        <section>
          <table className={styles.ranged}>
            <thead style={s}>
          <tr>
            <td>Ranged Weapons</td>
            <td>Range</td>
            <td>A</td>
            <td>BS</td>
            <td>S</td>
              <td>AP</td>
              <td>D</td>
              </tr>
            </thead>
            <tbody>
              {data.ranged.map((r, i) =>
              <tr key={i}>
                <td>{r[0]} {r[1].length ? <span className={styles.small}>[{r[1].map(w => w)}]</span> : ''}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td>{r[4]}</td>
                <td>{r[5]}</td>
                <td>{r[6]}</td>
                <td>{r[7]}</td>
              </tr>
              )}
            </tbody>
          </table>
        </section>
        : ''}
      
      {data?.melee ?
        <section>
          <table className={styles.melee}>
            <thead style={s}>
            <tr>
              <td>Melee Weapons</td>
              <td>Range</td>
              <td>A</td>
              <td>WS</td>
              <td>S</td>
              <td>AP</td>
              <td>D</td>
              </tr>
            </thead>
            <tbody>
            {data.melee.map((r, i) =>
              <tr key={i}>
                <td>{r[0]} {r[1].length ? <span className={styles.small}>[{r[1].map(w => w)}]</span> : ''}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td>{r[4]}</td>
                <td>{r[5]}</td>
                <td>{r[6]}</td>
                <td>{r[7]}</td>
              </tr>
              )}
            </tbody>
          </table>
        </section>
        : ''}
    </div>
  )
}