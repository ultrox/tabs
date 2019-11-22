## Tabs

### Install 

`yarn add @ma.vu/tabs`

OR

`npm install @ma.vu/tabs`


## Basic Example

```
import React from "react"
import { Tabs, TabPanel, TabPanels, Tab, TabList } from '@ma.vu/tabs'

function App() {
  return (
    <div className="App">
      <Tabs>
          <TabList>
            <Tab> English </Tab>
            <Tab> Schweizerdeutsch </Tab>
          </TabList>
          <TabPanels>
            <TabPanel> Hello </TabPanel>
            <TabPanel> Grüezi</TabPanel>
          </TabPanels>
      </Tabs>
    </div>
  )
}

export default App


```

### Motivation: 
I like simple things, I couldn't find minimalistic tab like behaviour that I can apply styles to. This is my attempt for minimalistic Tabs.



## Gradient from 
[gradient](https://cssgradient.io/gradient-backgrounds/)


Thanks to Ryan Florence who though me this pattern
