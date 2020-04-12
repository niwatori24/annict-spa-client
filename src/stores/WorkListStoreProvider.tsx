import ReactDOM from 'react-dom';
import { Work } from '../types/Work'
import { ReducerActionType as ActionType } from '../types/General'
import React, { createContext, useReducer, useContext } from 'react'
import { Action as WorkListAction } from '../actions/CurrentWork'

interface ContextProps {
  workList: Work[]
  workListDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

const reducer = (state: Work[], action: ActionType<Work[]>) => {
  switch (action.type) {
    case WorkListAction.set.type: {
      return action.payload
    }
    default: {
      return []
    }
  }
}

const WorkListStoreProvider: React.StatelessComponent<{}> = ({ children }): JSX.Element => {
  const [workList, workListDispatch] = useReducer(reducer, [])
  return <Provider value={{ workList, workListDispatch }}>{children}</Provider>
}
export { WorkListStoreProvider, store }
