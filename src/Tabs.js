import React from 'react'

// tabs will have all the state, like active index
export function Tabs(props) {
  const [index, setIndex] = React.useState(0)

  const newChildren = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      activeIndex: index,
      onSelectTab: setIndex,
    })
  })
  return <div className="Tabs">{newChildren}</div>
}

// responsible for rendering specific tab (will receive array of TabPanel)
export function TabPanels(props) {
  const { activeIndex } = props
  return <div className="panels">{props.children[activeIndex]}</div>
}

// TabList will receive array of Tab, from `Tabs`
export function TabPanel(props) {
  return props.children
}

// children are arr of Tab
export function TabList(props) {
  const newChildren = React.Children.map(props.children, (child, i) => {
    return React.cloneElement(child, {
      onSelect: _ => props.onSelectTab(i),
      isActive: props.activeIndex === i,
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
