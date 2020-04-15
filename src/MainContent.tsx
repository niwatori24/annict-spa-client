import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import axios from 'axios';
import { Work } from './types/Work'
import { AnnictAPI } from './AnnictAPI'
import { WorkListStoreProvider, store as WorkListStore } from './stores/WorkListStoreProvider'
import { Action as WorkListAction } from './actions/CurrentWork'

export const MainContent: React.FC = () => {
  const { workList, workListDispatch } = useContext(WorkListStore)

  useEffect(() => {
    const url: string = AnnictAPI.worksUrl([])
    axios.get(url, {}).then((res) => {
      const list: Work[] = []
      console.log(res.data)
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title })
      })
      workListDispatch({ type: WorkListAction.set.type, payload: list })
    })
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu />
      <MainContentBody />
    </div>
  )
}
