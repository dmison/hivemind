'use client'

import { useFaction } from "@/hooks/useFaction"

export default function ArmyRules ({ url_faction, detachment_name }: { url_faction: string, detachment_name: string }) {
  return (
    <div>
      <h2>{decodeURI(detachment_name)}</h2>
      placeholder
    </div>
  )
}
