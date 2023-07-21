import { useFaction } from '@/hooks/useFaction'
import { useFactionList } from '@/hooks/useFactionList'
import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'
import UnitList from '@/components/UnitList'
export default function FactionNav ({ faction_key }: { faction_key: string }) {
  const factionsData = useFactionList()
  const { faction, error, isLoading } = useFaction(faction_key)

  return (
    <ListGroup>
      <ListGroup.Item action>
        <Link href="/builder">&lt;&nbsp; Back</Link>
      </ListGroup.Item>
      <ListGroup.Item><strong>{faction?.name}</strong></ListGroup.Item>
      <ListGroup.Item action>
        Army Rules
      </ListGroup.Item>
      <ListGroup.Item><strong>Detactments</strong></ListGroup.Item>
      {faction?.detachments?.map(d => (
        <ListGroup.Item key={d.name} action>
          <Link href={`/builder/${faction_key}/detachment/${d.name}`}>{d.name}</Link>
        </ListGroup.Item>
      ))}

      <ListGroup.Item><strong>Units</strong></ListGroup.Item>
      <UnitList
        datacards={faction?.datacards}
        faction={faction_key}
      />

    </ListGroup>
  )
}