import React, { useContext } from 'react';
import { Work } from './../types/Work'
import { store as WorkListStore } from '../stores/WorkListStoreProvider'

interface Props {
  setCurrentWork: Function
}

export const MainContentMenu: React.FC<Props> = props => {
  const { workList, workListDispatch } = useContext(WorkListStore)

  const handleClick = (work: Work) => {
    props.setCurrentWork({ type: 'set', payload: { id: work.id, title: work.title } })
  }

  return (
    <div style={{ flex: 1, background: 'red' }}>
      <ul>
        { workList.map((work: Work, i: number) => {
            return <li
              key={work.id}
              onClick={(e) => { handleClick(work); e.preventDefault() }}
            ><a href='#'>{work.title}</a></li>
          })
        }
      </ul>
    </div>
  )
}
