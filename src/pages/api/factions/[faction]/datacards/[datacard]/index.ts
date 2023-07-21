import { NextApiResponse, NextApiRequest } from 'next'
import path from 'path'
import { promises as fs } from 'fs'
import { iDataCard } from '@/components/DataCard/DataCard.type'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

  const { faction, datacard } = req.query
  const filepath = path.join(process.cwd(), 'data', `${faction}.json`)

  try {
    const content = await fs.readFile(filepath)
    const payload = content.toString('utf-8')
    const faction = JSON.parse(payload)
    const dcard = faction.datacards.find((card: iDataCard) => card.name === datacard)
    if (!dcard) throw 'nope'
    dcard.colour = faction.colour
    dcard.text = faction.text
    res.status(200).json(dcard)
  } catch (e) {
    res.status(404).send('404 Nope')
  }

}