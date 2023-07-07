export interface iPoints {
  "1"?: number
  "2"?: number
  "3"?: number
  "4"?: number
  "5"?: number
  "6"?: number
  "7"?: number
  "8"?: number
  "9"?: number
  "10"?: number
}
export type iWeapon = [string, string[], string, string, string, string, string, string]
//Array<string | string[]>


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