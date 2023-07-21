// import styles from './builder.module.css'
import FactionList from '@/components/FactionList'
interface iFaction {
  name: string
  data: string
}
// interface iFactionList {
//   [key: string]: iFaction
// }

import styles from './NavCol.module.css'
import { useFactionList } from '@/hooks/useFactionList'
import { useFaction } from '@/hooks/useFaction'
import FactionNav from '@/components/FactionNav'

export default function NavCol ({ urlFaction }: { urlFaction?: string }) {
  // const fetcher = async (url: string) => fetch(url).then((res) => res.json())

  const factionsData = useFactionList()
  // const factionData = useFaction(urlFaction)

  // const [factionList, setFactionList] = useState<iFactionList>({});
  // const [unitList, setUnitList] = useState<iDataCard[]>([])
  // const [selectedCard, setSelectedCard] = useState(null)

  //   // setColour([faction.text, faction.colour])

  return (
    <section className={styles.navCol}>
      {urlFaction ?
        <FactionNav faction_key={urlFaction} />
        :
        <FactionList
          factions={factionsData?.factions}
          isLoading={factionsData?.isLoading} />
      }
    </section>
  )
}