import React, { useContext } from 'react';
import { Work } from './../types/Work'
import { store as CurrentStore } from '../stores/CurrentWorkStoreProvider'
import { store as LastResponseWorkListStore } from '../stores/LastResponseWorkListStoreProvider'
import { store as WorkListSearchFromStore } from '../stores/WorkListSearchFromStoreProvider'
import { PaginationComponent } from './PaginationComponent'
import { AnnictAPI, WorksUrlParams } from '../AnnictAPI'
import { WorkListFetcher } from '../MainContent/AnnictAPIClient'

interface Props {
}

export const MainContentMenu: React.FC<Props> = props => {
  const { currentWork, currentWorkDispatch } = useContext(CurrentStore)
  const { lastResponseWorkList, lastResponseWorkListDispatch } = useContext(LastResponseWorkListStore)
  const { form, formDispatch } = useContext(WorkListSearchFromStore)

  const handleClick = (work: Work) => {
    currentWorkDispatch({ type: 'set', payload: { id: work.id, title: work.title } })
  }

  const paginationHandleClick = (page: number) => {
    const url: string = AnnictAPI.worksUrl({ sortValue: form.sortValue, filterTitle: form.filterTitle, page: page } as WorksUrlParams)
    WorkListFetcher.run(lastResponseWorkListDispatch, url)
  }

  return (
    <div style={{ flex: 1, background: 'red' }}>
      {lastResponseWorkList.pagination && <PaginationComponent
        pagination={lastResponseWorkList.pagination}
        unit={'作品'}
        nextPageHandleClick={paginationHandleClick} prevPageHandleClick={paginationHandleClick} />
      }
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
