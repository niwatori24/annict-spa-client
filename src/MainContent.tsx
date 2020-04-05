import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useRef
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import axios from 'axios';
import { Work } from './types/Work'
import { AnnictAPI } from './AnnictAPI'

// const reducer2 = (state: any): <Work>[] => {
// console.log(state)
// }

function reducer(state: Work[], action: any): Work[]  {
  console.log('from reducer', state, action)
  switch (action.type) {
    case 'getWork':
      console.log('has return')
      let list = getWorks()
      console.log('getWorks() =>', list)
      return getWorks()
  }
  console.log('empty return')
  return []
}

const async getWorks = (): Work[] => {
  const url: string = AnnictAPI.worksUrl()
  const res = await axios.get(url, {})
  const list: Work[] = []
  res.data.works.map((w: any, i: number) => {
    list.push({ id: w.id, title: w.title })
  })
  console.log('another thread in getWorks')
  return list
  console.log('main thread in getWorks')
  return []
}

export function getWorkType() {
  return { type: 'getWork' }
}

export const MainContent: React.FC = () => {
  const [currentWork, setCurrentWork] = useState(null);

  const [workList2, workListDispatch] = useReducer(reducer, [])
  const getWorkList = useCallback(() => workListDispatch(getWorkType()), [])

  useEffect(() => {
    console.log('run getWorks()')
    getWorkList()
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu
        workList={workList2}
        setCurrentWork={setCurrentWork}
      />
      <MainContentBody currentWork={currentWork} />
    </div>
  )
}
