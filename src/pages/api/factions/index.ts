// import * as 'http' from 'http'
import { NextApiResponse, NextApiRequest } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    "tau": {
      "name": "Tau Empire",
      "data": "/api/factions/tau-empire"
    },
    "tyranids": {
      "name": "Tyranids",
      "data": "/api/factions/tyranids"
    }
  })
}