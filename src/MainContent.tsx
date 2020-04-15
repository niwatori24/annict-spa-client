import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import { WorkListFetcher } from './MainContent/AnnictAPIClient'
import { store as WorkListStore } from './stores/WorkListStoreProvider'
import { AnnictAPI, worksUrlParams } from './AnnictAPI'
import { store as WorkListSearchFromStore } from './stores/WorkListSearchFromStoreProvider'

export const MainContent: React.FC = () => {
  const { workList, workListDispatch } = useContext(WorkListStore)
  const { form, formDispatch } = useContext(WorkListSearchFromStore)

  useEffect(() => {
    const url: string = AnnictAPI.worksUrl({ sortValue: form.sortValue, filterTitle: form.filterTitle } as worksUrlParams)
    WorkListFetcher.run(workListDispatch, url)
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu />
      <MainContentBody />
    </div>
  )
}
