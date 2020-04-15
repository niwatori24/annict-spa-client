import React, { useContext } from 'react';
import { Work } from './../types/Work'
import { store as CurrentStore } from '../stores/CurrentWorkStoreProvider'
import { store as WorkListStore } from '../stores/WorkListStoreProvider'
import { PaginationComponent } from './PaginationComponent'

interface Props {
}

export const MainContentMenu: React.FC<Props> = props => {
  const { currentWork, currentWorkDispatch } = useContext(CurrentStore)
  const { workList, workListDispatch }       = useContext(WorkListStore)

  const handleClick = (work: Work) => {
    currentWorkDispatch({ type: 'set', payload: { id: work.id, title: work.title } })
  }

  return (
    <div style={{ flex: 1, background: 'red' }}>
      <ul>
        { workList && workList.map((work: Work, i: number) => {
            return <li
              key={work.id}
              onClick={(e) => { handleClick(work); e.preventDefault() }}
            ><a href='#'>{work.title}</a></li>
          })
        }
      </ul>
      { workList === null && <div>取得中です</div>}
  </div>
)
}
