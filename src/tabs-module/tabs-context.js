// Custom Context Provider: tabs-context.js

import React from 'react'

export { TabsProvider, useTabsState, useTabsDispatch, useTabs }

const TabsStateContext = React.createContext()
const TabsDispatchContext = React.createContext()

function TabsProvider(props) {
  // default implicite state of 0
  const [state, dispatch] = React.useState(0)
  return (
    <TabsStateContext.Provider value={state}>
      {/* premature optimization to avoid uneciserry rendering by using 2 context*/}
      <TabsDispatchContext.Provider value={dispatch}>
        {props.children}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  )
}

// void → [arrof Number, fn]
function useTabsState() {
  const context = React.useContext(TabsStateContext)

  // its not rendered inside TabsProvider, throw
  if (context === undefined) {
    throw new Error(`useTabsState() must be used with TabsProvider`)
  }
  return context
}

function useTabsDispatch() {
  const context = React.useContext(TabsDispatchContext)

  // its not rendered inside TabsProvider, throw
  if (context === undefined) {
    throw new Error(`useTabsDispatch() must be used with TabsProvider`)
  }
  return context
}

// cute helper to use them together
function useTabs() {
  return [useTabsState(), useTabsDispatch()]
}
