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
import { AnnictAPI, worksUrlParams } from './AnnictAPI'
import { store as WorkListSearchFromStore } from './stores/WorkListSearchFromStoreProvider'
import { store as LastResponseWorkListStore } from './stores/LastResponseWorkListStoreProvider'

export const MainContent: React.FC = () => {
  const { lastResponseWorkList, lastResponseWorkListDispatch } = useContext(LastResponseWorkListStore)
  const { form, formDispatch } = useContext(WorkListSearchFromStore)

  useEffect(() => {
    const url: string = AnnictAPI.worksUrl({ sortValue: form.sortValue, filterTitle: form.filterTitle } as worksUrlParams)
    WorkListFetcher.run(lastResponseWorkListDispatch, url)
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu />
      <MainContentBody />
    </div>
  )
}
