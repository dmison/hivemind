// import * as 'http' from 'http'
import { NextApiResponse, NextApiRequest } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    "tau": {
      "name": "T'au Empire",
      "data": "/api/factions/tau"
    },
    "tyranids": {
      "name": "Tyranids",
      "data": "/api/factions/tyranids"
    },
    "votann": {
      "name": "Leagues of Votann",
      "data": "/api/factions/votann"
    }
  })
}