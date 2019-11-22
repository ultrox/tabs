import './index.css'
import React from 'react'
import { Tabs, TabPanel, TabPanels, Tab, TabList } from './tabs-module/Tabs'
import styled from 'styled-components'

import { TiCogOutline, TiChartBar, TiHeart, TiGift } from 'react-icons/ti'
import * as text from './mocky-text'

function App() {
  return (
    <div className="App">
      <StyledTabs defaultValue={0}>
        <div>
          <StyledTabList>
            <StyledTab><TiCogOutline /></StyledTab>
            <StyledTab><TiChartBar /></StyledTab>
            <StyledTab> <TiHeart /> </StyledTab>
            <StyledTab> <TiGift /> </StyledTab>
          </StyledTabList>
        </div>
        <div>
          <StyledPanels>
            <TabPanel> {text.settings} </TabPanel>
            <TabPanel> {text.graph} </TabPanel>
            <TabPanel> {text.love} </TabPanel>
            <TabPanel> {text.gift} </TabPanel>
          </StyledPanels>
        </div>
      </StyledTabs>
    </div>
  )
}

const StyledTabs = styled(Tabs)`
  position: relative;
  top: 50px;
  width: 700px;
  margin: 0 auto;
  background: white;
  box-shadow: 0px 10px 40px hsla(0, 0%, 0%, 0.25);
`

const StyledTabList = styled(TabList)`
  display: flex;
  border-bottom: solid 2px rgb(231, 236, 238);
`

const StyledTab = styled(Tab)`
  flex: 1;
  padding: 10px;
  background: white;
  text-align: center;
  color: hsl(240, 5%, 60%);
  font-size: 200%;
  cursor: pointer;

  &:hover {
    color: hsl(240, 5%, 70%);
  }

  &:active {
    transform: scale(0.95);
    color: #fbc2eb;
  }
  ${props => props.isActive && 'color: #fbc2eb;'}
  ${props => props.isDisabled && 'opacity: 0.25;'}
`

const StyledPanels = styled(TabPanels)`
  h2 {
    text-transform: uppercase;
  }

  background: rgb(244, 249, 252);
  min-height: 300px;
  padding: 20px;
`

export default App
