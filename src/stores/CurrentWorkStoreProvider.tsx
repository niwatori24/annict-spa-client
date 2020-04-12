import ReactDOM from 'react-dom';
import { Work } from '../types/Work'
import React, { createContext, useReducer, useContext } from 'react'

interface ContextProps {
  currentWork: Work | null
  currentWorkDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

interface ActionType {
  type: string
  payload: Work
}

function reducer(state: Work | null, action: ActionType): Work | null {
  switch (action.type) {
    case 'set': {
      return { id: action.payload.id, title: action.payload.title }
    }
    default: {
      throw new Error()
    }
  }
}

const CurrentWorkStoreProvider: React.StatelessComponent<{}> = ({ children }): JSX.Element => {
  const [currentWork, currentWorkDispatch] = useReducer(reducer, null)
  return <Provider value={{ currentWork, currentWorkDispatch }}>{children}</Provider>
}
export { CurrentWorkStoreProvider, store }
