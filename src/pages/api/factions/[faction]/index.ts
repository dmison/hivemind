import { NextApiResponse, NextApiRequest } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

  const { faction } = req.query
  const filepath = path.join(process.cwd(), 'data', `${faction}.json`)

  try {
    const payload = await fs.readFile(filepath)
    const content = payload.toString('utf-8')
    res.status(200).json(JSON.parse(content))
  } catch (e) {
    res.status(404).send('404 Nope')
  }

}