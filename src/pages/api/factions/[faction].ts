import { NextApiResponse, NextApiRequest } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  // get faction
  const { faction } = req.query
  const filepath = path.join(process.cwd(), 'data', `${faction}.json`)
  // read file - exception send 404

  // try {
  const content = await fs.readFile(filepath)
  res.status(200).json(JSON.parse(content))
  // } catch (e) {
  // res.status(404)
  // }
  //send as json

  // res.status(200).json({
  //   "tau": "tau-empire.json",
  //   "tyranids": "tyranids.json"
  // })
}