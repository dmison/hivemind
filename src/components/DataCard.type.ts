export interface iPoints {
  [key: string]: number
}
export type iWeapon = [string, string[], string, string, string, string, string, string]


export interface iDataCard {
  name: string
  points: iPoints
  keywords?: string[]
  faction?: string[]
  stats?: string[]
  invul?: string
  invulv_notes?: string
  ranged?: iWeapon[]
  melee?: iWeapon[]
  abilities?: {
    core?: string[]
    faction?: string
    unit?: { name: string, text: string }[]
    wargear?: { name: string, text: string }[]
  }
}