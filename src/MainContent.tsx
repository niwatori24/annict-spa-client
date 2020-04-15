import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import { WorkListFetcher } from './MainContent/WorkListFetcher'
import { store as WorkListStore } from './stores/WorkListStoreProvider'

export const MainContent: React.FC = () => {
  const { workList, workListDispatch } = useContext(WorkListStore)

  useEffect(() => {
    WorkListFetcher.run(workListDispatch)
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu />
      <MainContentBody />
    </div>
  )
}
