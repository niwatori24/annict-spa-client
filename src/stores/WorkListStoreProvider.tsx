import ReactDOM from 'react-dom';
import { Work } from '../types/Work'
import React, { createContext, useReducer, useContext } from 'react'

interface ContextProps {
  workList: Work[]
  workListDispatch: Function
}

const store = React.createContext({} as ContextProps)
const { Provider } = store

const WorkListStoreProvider = ({ children }: any ): JSX.Element => {
  const [workList, workListDispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'getWork':
        return action.payload;
      default:
        return [];
    }
  }, [])
  return <Provider value={{ workList, workListDispatch }}>{children}</Provider>
}
export { WorkListStoreProvider, store }
