import React from 'react'
import { TabsProvider, useTabsState, useTabsDispatch } from './tabs-context'

// tabs will have all the state, like active index
export function Tabs(props) {
  return (
    <TabsProvider>
      <div className="Tabs">{props.children}</div>
    </TabsProvider>
  )
}

// responsible for rendering specific tab (will receive array of TabPanel)
export function TabPanels(props) {
  const activeIndex = useTabsState()

  return <div className="panels">{props.children[activeIndex]}</div>
}

// TabList will receive array of Tab, from `Tabs`
export function TabPanel(props) {
  return props.children
}

// children are arr of Tab
export function TabList(props) {
  const activeIndex = useTabsState()
  const setActiveIndex = useTabsDispatch()

  const newChildren = React.Children.map(props.children, (child, i) => {
    return React.cloneElement(child, {
      onSelect: _ => setActiveIndex(i),
      isActive: activeIndex === i,
    })
  })

  return <div className="tabs">{newChildren}</div>
}

// Tab need to activate new active index
export function Tab(props) {
  return (
    <div
      onClick={props.onSelect}
      className={props.isActive ? 'active tab' : 'tab'}>
      {props.children}
    </div>
  )
}
