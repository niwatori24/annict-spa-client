import React, { useContext } from 'react';
import { Work } from './../types/Work'
import { store as CurrentStore } from '../stores/CurrentWorkStoreProvider'
import { store as LastResponseWorkList } from '../stores/LastResponseWorkListStoreProvider'
import { PaginationComponent } from './PaginationComponent'

interface Props {
}

export const MainContentMenu: React.FC<Props> = props => {
  const { currentWork, currentWorkDispatch } = useContext(CurrentStore)
  const { lastResponseWorkList, lastResponseWorkListDispatch } = useContext(LastResponseWorkList)

  const handleClick = (work: Work) => {
    currentWorkDispatch({ type: 'set', payload: { id: work.id, title: work.title } })
  }

  return (
    <div style={{ flex: 1, background: 'red' }}>
      <ul>
        { lastResponseWorkList.workList && lastResponseWorkList.workList.map((work: Work, i: number) => {
            return <li
              key={work.id}
              onClick={(e) => { handleClick(work); e.preventDefault() }}
            ><a href='#'>{work.title}</a></li>
          })
        }
      </ul>
      { lastResponseWorkList.workList === null && <div>取得中です</div>}
      { lastResponseWorkList.workList && lastResponseWorkList.workList.length === 0 && <div>見つかりませんでした</div>}
  </div>
)
}
