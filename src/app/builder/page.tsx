'use client'

import styles from './builder.module.css'
import FactionList from '@/components/FactionList'
import UnitList from '@/components/UnitList'
import DataCard from '@/components/DataCard'

import { useState, useEffect } from 'react'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function BuilderPage () {
  const [colour, setColour] = useState(['#ffffff', '#000000'])
  const [factionList, setFactionList] = useState({});
  const [selectedFaction, setSelectedFaction] = useState('');
  const [unitList, setUnitList] = useState([])
  const [selectedCard, setSelectedCard] = useState('')
  const [selectedCardData, setSelectedCardData] = useState(null)

  useEffect(() => {
    if (selectedCard && unitList && selectedFaction) {
      const card = unitList.find(u => u.name === selectedCard)
      if (card) {
        setSelectedCardData(card)
      }
    }
  }, [selectedCard])
  
  useEffect(() => {
    setSelectedCard('')
    setSelectedCardData(null)
    
  }, [selectedFaction])

  const factionsData = useSWR('/api/factions', fetcher)
  useEffect(() => { setFactionList(factionsData.data) },[factionsData]);
  
  const factionData = useSWR(selectedFaction && factionList ? `${factionList[selectedFaction]['data']}` : null, fetcher) 
  useEffect(() => {
    setUnitList(factionData.data?.datacards ?? [])
    setColour([factionData.data?.text, factionData.data?.colour])
  }, [factionData])
  
  function setFaction (faction: string) {
    setSelectedFaction(faction)
  }


  return (
    <main className={styles.container}>
      <div className={styles.factions}>
        <FactionList  factions={ factionList } selected={selectedFaction} onSelect={setFaction} isLoading={factionsData.isLoading} />
      </div>
      <div className={styles.units}>
        {selectedFaction ? factionList[selectedFaction].name : ''}
        <hr/>
        <UnitList datacards={unitList} onSelect={setSelectedCard} selected={selectedCard} />
      </div>
      <div className={styles.datacard}>
        {selectedCardData ? <DataCard data={selectedCardData} colour={ colour } /> : '' }
      </div>
    </main>
  )
}