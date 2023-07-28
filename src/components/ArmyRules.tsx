'use client'
import { useFaction } from "@/hooks/useFaction"

export default function ArmyRules ({ url_faction }: { url_faction: string }) {
  console.log(url_faction)
  const { faction, isLoading, error } = useFaction(url_faction)
  if (isLoading) return <div>Loading...</div>
  return (<div>
    <h2>Army Rules</h2>

    {faction?.army_rules?.map(ar => (
      <section key={ar.name}>
        <h3>{ar.name}</h3>
        <p><em>{ar.flavour}</em></p>
        {ar.rule?.map((r, i) => (<p key={i}>{r}</p>))}
      </section>
    ))}
  </div>
  )

}