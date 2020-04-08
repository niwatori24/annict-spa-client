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

function reducer(state: Work[], action: any): Work[]  {
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
  const [currentWork, setCurrentWork] = useState(null);

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
