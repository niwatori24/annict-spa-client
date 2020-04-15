import ReactDOM from 'react-dom';
import { ReducerActionType as ActionType } from '../types/General'
import { WorkListSearchFrom } from '../types/WorkListSearchFrom'
import React, { createContext, useReducer, useContext } from 'react'
import { Action as WorkListSearchFromAction } from '../actions/WorkListSearchFrom'

interface ContextProps {
  form: WorkListSearchFrom
  formDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

const reducer = (state: WorkListSearchFrom, action: ActionType<WorkListSearchFrom>) => {
  switch (action.type) {
    case WorkListSearchFromAction.set.type: {
      return action.payload
    }
    default: {
      throw new Error()
    }
  }
}

const WorkListSearchFromStoreProvider: React.StatelessComponent<{}> = ({ children }): JSX.Element => {
  const [form, formDispatch] = useReducer(reducer, {
    sortValue: 'desc', filterTitle: ''
  })
  return <Provider value={{ form, formDispatch }}>{children}</Provider>
}
export { WorkListSearchFromStoreProvider, store }
