'use client'

import styles from './builder.module.css'
import DataCard from '@/components/DataCard/DataCard'

import NavCol from '@/components/NavCol'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface iFaction {
  name: string
  data: string
}
interface iFactionList {
  [key: string]: iFaction
}

export default function BuilderPage ({ params }: { params: { faction?: string, detatchment?: string, datacard?: string, detachment?: string } }) {

  // const [colour, setColour] = useState<[string, string]>(['#ffffff', '#000000'])

  const { faction = '', detachment = '', datacard = '' } = params

  return (
    <Container fluid>
      <Row>
        <Col className={styles.mainCol} md={2}>
          <NavCol urlFaction={faction ?? ''} />
        </Col>
        <Col className={styles.mainCol}>
          {datacard ? <DataCard name={datacard} faction={faction} /> : null} </Col>
      </Row>
    </Container>

  )
}
