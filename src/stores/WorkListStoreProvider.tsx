import ReactDOM from 'react-dom';
import { Work } from '../types/Work'
import React, { createContext, useReducer, useContext } from 'react'

interface ContextProps {
  workList: Work[]
  workListDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

interface ActionType {
  type: string
  payload: Work[]
}

const reducer = (state: Work[], action: ActionType) => {
  switch (action.type) {
    case 'getWork':
    return action.payload;
    default:
    return [];
  }
}

const WorkListStoreProvider: React.StatelessComponent<{}> = ({ children }): JSX.Element => {
  const [workList, workListDispatch] = useReducer(reducer, [])
  return <Provider value={{ workList, workListDispatch }}>{children}</Provider>
}
export { WorkListStoreProvider, store }
