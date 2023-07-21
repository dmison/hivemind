import { iDetachment } from './iDetachment.type'
import { iDataCard } from '@/components/DataCard/DataCard.type'
import { iArmyRule } from './iArmyRule.type'
export interface iFaction {
  name: string
  colour: string
  text: string
  detachments?: iDetachment[]
  datacards: iDataCard[]
  army_rules: iArmyRule[]
}