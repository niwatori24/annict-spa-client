import React, {
  useState,
  useEffect,
  useReducer
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import axios from 'axios';
import { Work } from './types/Work'
import { AnnictAPI } from './AnnictAPI'

interface Action {
  type: string
  payload: Work[]
}

interface currentWorkAction {
  type: string
  payload: Work
}

function currentWorkReducer(state: Work | null, action: currentWorkAction): Work | null {
  switch (action.type) {
    case 'set': {
      return { id: action.payload.id, title: action.payload.title }
    }
    default: {
      throw new Error()
    }
  }
}

function reducer(state: Work[], action: Action): Work[]  {
  switch (action.type) {
    case 'getWork':
      return action.payload
    default:
      return []
  }
}

export function getWorkType() {
  return { type: 'getWork' }
}

export const MainContent: React.FC = () => {
  const [currentWork, setCurrentWork] = useReducer(currentWorkReducer, null)
  const [workList, workListDispatch] = useReducer(reducer, [])

  useEffect(() => {
    const url: string = AnnictAPI.worksUrl()
    axios.get(url, {}).then((res) => {
      const list: Work[] = []
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title })
      })
      workListDispatch({ type: getWorkType().type, payload: list })
      return list
    })
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu
        workList={workList}
        setCurrentWork={setCurrentWork}
      />
      <MainContentBody currentWork={currentWork} />
    </div>
  )
}
