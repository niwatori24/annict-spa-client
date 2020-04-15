import ReactDOM from 'react-dom';
import { ReducerActionType as ActionType } from '../types/General'
import { LastResponseWorkList } from '../types/LastResponseWorkList'
import React, { createContext, useReducer, useContext } from 'react'
import { Action } from '../actions/LastResponseWorkList'

interface ContextProps {
  lastResponseWorkList: LastResponseWorkList
  lastResponseWorkListDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

const reducer = (state: LastResponseWorkList, action: ActionType<LastResponseWorkList>) => {
  switch (action.type) {
    case Action.set.type: {
      return { 
        workList: action.payload.workList,
        pagination: action.payload.pagination 
      }
    }
    case Action.reset.type: {
      return { workList: null, pagination: null }
    }
    default: { throw new Error() }
  }
}

const LastResponseWorkListStoreProvider: React.StatelessComponent<{}> = ({ children }): JSX.Element => {
  const [lastResponseWorkList, lastResponseWorkListDispatch] = useReducer(
    reducer,
    { workList: null, pagination: null } as LastResponseWorkList
  )
  return <Provider value={{ lastResponseWorkList, lastResponseWorkListDispatch }}>{children}</Provider>
}
export { LastResponseWorkListStoreProvider, store }
