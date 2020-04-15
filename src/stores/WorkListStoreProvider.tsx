import ReactDOM from 'react-dom';
import { Work } from '../types/Work'
import { ReducerActionType as ActionType } from '../types/General'
import { WorkList } from '../types/WorkList'
import React, { createContext, useReducer, useContext } from 'react'
import { Action as WorkListAction } from '../actions/CurrentWork'

interface ContextProps {
  workList: WorkList
  workListDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

const reducer = (state: WorkList, action: ActionType<WorkList>) => {
  switch (action.type) {
    case WorkListAction.set.type: {
      return action.payload
    }
    case WorkListAction.reset.type: {
      return null
    }
    default: {
      return []
    }
  }
}

const WorkListStoreProvider: React.StatelessComponent<{}> = ({ children }): JSX.Element => {
  const [workList, workListDispatch] = useReducer(reducer, null as WorkList)
  return <Provider value={{ workList, workListDispatch }}>{children}</Provider>
}
export { WorkListStoreProvider, store }
