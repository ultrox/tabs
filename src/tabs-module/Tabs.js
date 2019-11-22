import React from 'react'
import { TabsProvider, useTabsState, useTabsDispatch } from './tabs-context'

const isControlable = (val, fn) => {
  const isValValid = typeof val === 'number' && !Number.isNaN(val)
  const isFnValid = typeof fn === 'function'

  if (isValValid && isFnValid) {
    return true
  } else {
    !isValValid &&
      console.error(
        `<Tabs> prop 'value': needs to be number but its ${typeof val}`,
      )
    !isFnValid &&
      console.error(
        `<Tabs> prop 'onSelect': needs to be function, but its ${typeof fn}`,
      )
    return false
  }
}
// tabs will have all the state, like active index
export function Tabs(props) {
  const stateHook = React.useState(props.defaultValue || 0)
  // prettier-ignore
  const value = isControlable(props.value, props.onSelect)
    ? [props.value, props.onSelect] 
    : stateHook

  return (
    <TabsProvider value={value}>
      <div className={props.className}>{props.children}</div>
    </TabsProvider>
  )
}

// responsible for rendering specific tab (will receive array of TabPanel)
export function TabPanels(props) {
  const activeIndex = useTabsState()
  return <div className={props.className}>{props.children[activeIndex]}</div>
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

  return <div className={props.className}>{newChildren}</div>
}

// Tab need to activate new active index
export function Tab(props) {
  return (
    <div onClick={props.onSelect} className={props.className}>
      {props.children}
    </div>
  )
}
