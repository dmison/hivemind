import styles from './DataCard.module.css'

import { iDataCard } from '@/components/DataCard/DataCard.type'
import { useDatacard } from '@/hooks/useDataCard'
import { Suspense } from 'react'

export default function DataCard ({ name, faction }: { name: string, faction: string }) {
  const { data, isLoading } = useDatacard(faction, name)
  if (isLoading) return <div>loading...</div>

  const s = { "backgroundColor": data.colour, "color": data.text }

  return (
    <div className={styles.datacard}>
      <h1 style={s}>{data.name}</h1>
      <section className="styles.points">
        <ul>
          {Object.keys(data.points).map(c =>
            <li key={c}>{c} model{parseInt(c) > 1 ? 's' : ''}: {data.points[c]} points</li>
          )}
        </ul>
      </section>
      <section className={styles.keywords}>
        <div>
          Keywords: <ul className={styles.keywords}>
            {data.keywords?.map(k => <li key={k}>{k}</li>)}
          </ul>
        </div>
        <div>
          Faction Keywords: <ul className={styles.keywords}>
            {data.faction_keywords?.map(k => <li key={k}>{k}</li>)}
          </ul>
        </div>
      </section>
      {data?.stats ?
        <table className={styles.stats}>
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
      <section>
        <h2>Abilities</h2>
        {data?.abilities?.core ? <section>
          <h3>Core</h3>
          <ul>
            {data.abilities.core.map((a: string) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section> : ''}
        {data?.abilities?.faction ? <section>
          <h3>Faction</h3>
          <ul><li>{data.abilities.faction}</li></ul>
        </section>
          : ''}
        {data?.abilities?.unit ? <section>
          <ul>
            {data?.abilities?.unit.map((a) => (
              <li key={a.name}>
                <strong>{a.name}: </strong>
                {a.text}
              </li>
            ))}
          </ul>
        </section> : ''}
        {data?.abilities?.wargear ? <section>
          <h3>Wargear</h3>
          <ul>
            {data.abilities.wargear.map((a: { name: string, text: string }) => (
              <li key={a.name}>
                <strong>{a.name}: </strong>
                {a.text}
              </li>
            ))}
          </ul>
        </section> : ''}
      </section>
    </div>
  )

  // const s = { "backgroundColor": colour[1], "color": colour[0] }
  // return (
  // <div className={styles.datacard}>
  //   <h1 style={s}>{data.name}</h1>
  //   <section className="styles.points">
  //     <ul>
  //       {Object.keys(data.points).map(c =>
  //         <li key={c}>{c} model{parseInt(c) > 1 ? 's' : ''}: {data.points[c]} points</li>
  //       )}
  //     </ul>
  //   </section>
  //   <section className={styles.keywords}>
  //     <div>
  //       Keywords: <ul>
  //         {data.keywords?.map(k => <li key={k}>{k}</li>)}
  //       </ul>
  //     </div>
  //     <div>
  //       Faction Keywords: <ul>
  //         {data.faction_keywords?.map(k => <li key={k}>{k}</li>)}
  //       </ul>
  //     </div>
  //   </section>
  //   {data?.stats ?
  //     <table className={ styles.stats }>
  //       <thead>
  //       <tr>
  //         <td>M</td>
  //         <td>T</td>
  //         <td>Sv</td>
  //         <td>W</td>
  //         <td>Ld</td>
  //         <td>OC</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //       <tr>
  //         <td>{data.stats[0]}</td>
  //         <td>{data.stats[1]}</td>
  //         <td>{data.stats[2]}</td>
  //         <td>{data.stats[3]}</td>
  //         <td>{data.stats[4]}</td>
  //         <td>{data.stats[5]}</td>
  //         </tr>
  //       </tbody>
  //     </table> : ''}
  //   {data?.ranged ? 
  //     <section>
  //       <table className={styles.ranged}>
  //         <thead style={s}>
  //       <tr>
  //         <td>Ranged Weapons</td>
  //         <td>Range</td>
  //         <td>A</td>
  //         <td>BS</td>
  //         <td>S</td>
  //           <td>AP</td>
  //           <td>D</td>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data.ranged.map((r, i) =>
  //           <tr key={i}>
  //             <td>{r[0]} {r[1].length ? <span className={styles.small}>[{r[1].map(w => w)}]</span> : ''}</td>
  //             <td>{r[2]}</td>
  //             <td>{r[3]}</td>
  //             <td>{r[4]}</td>
  //             <td>{r[5]}</td>
  //             <td>{r[6]}</td>
  //             <td>{r[7]}</td>
  //           </tr>
  //           )}
  //         </tbody>
  //       </table>
  //     </section>
  //     : ''}

  //   {data?.melee ?
  //     <section>
  //       <table className={styles.melee}>
  //         <thead style={s}>
  //         <tr>
  //           <td>Melee Weapons</td>
  //           <td>Range</td>
  //           <td>A</td>
  //           <td>WS</td>
  //           <td>S</td>
  //           <td>AP</td>
  //           <td>D</td>
  //           </tr>
  //         </thead>
  //         <tbody>
  //         {data.melee.map((r, i) =>
  //           <tr key={i}>
  //             <td>{r[0]} {r[1].length ? <span className={styles.small}>[{r[1].map(w => w)}]</span> : ''}</td>
  //             <td>{r[2]}</td>
  //             <td>{r[3]}</td>
  //             <td>{r[4]}</td>
  //             <td>{r[5]}</td>
  //             <td>{r[6]}</td>
  //             <td>{r[7]}</td>
  //           </tr>
  //           )}
  //         </tbody>
  //       </table>
  //     </section>
  //     : ''}
  //   <section>
  //     <h2>Abilities</h2>
  //     {data?.abilities?.core ? <section><h3>Core</h3></section> : ''}
  //   </section>
  // </div>
  // )
}