import './index.css'
import React from 'react'
import { Tabs, TabPanel, TabPanels, Tab, TabList } from './Tabs'

import { TiCogOutline, TiChartBar, TiHeart, TiGift } from 'react-icons/ti'
import * as text from './mocky-text'

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          {/* This is how I want API to work*/}
          <Tab> <TiCogOutline /> </Tab>
          <Tab> <TiChartBar /> </Tab>
          <Tab> <TiHeart /> </Tab>
          <Tab> <TiGift /> </Tab>
        </TabList>
        <TabPanels>
          <TabPanel> {text.settings} </TabPanel>
          <TabPanel> {text.graph} </TabPanel>
          <TabPanel> {text.love} </TabPanel>
          <TabPanel> {text.gift} </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default App
