import React from 'react'

// tabs will have all the state, like active index
export function Tabs(props) {
  return <div className="Tabs">{props.children}</div>
}


// responsible for rendering specific tab (will receive array of TabPanel)
export function TabPanels(props) {
  const activeIndex = 0 
  return <div className="panels">{props.children}</div>
}

// TabList will receive array of Tab, from `Tabs`
export function TabPanel(props) {
  return props.children
}

// children are arr of Tab
export function TabList(props) {
  return <div className="tabs">{props.children}</div>
}

// Tab need to activate new active index
export function Tab(props) {
  return <div className="tab">{props.children}</div>
}


