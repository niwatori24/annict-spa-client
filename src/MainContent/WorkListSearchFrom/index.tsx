import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Work } from '../../types/Work'
import { AnnictAPI, worksUrlParams } from '../../AnnictAPI'
import { WorkListStoreProvider, store as WorkListStore } from '../../stores/WorkListStoreProvider'
import { Action as WorkListAction } from '../../actions/CurrentWork'

export const WorkListSearchFrom: React.FC = () => {
  const { workList, workListDispatch } = useContext(WorkListStore)
  const [sortValue, setSortValue] = useState('desc')
  const [filterTitle, setFilterTitle] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const url: string = AnnictAPI.worksUrl({ sortValue: sortValue, filterTitle: filterTitle } as worksUrlParams)
    // ここでfromのstoreに記録する
    axios.get(url, {}).then((res) => {
      const list: Work[] = []
      console.log(res.data)
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title })
      })
      workListDispatch({ type: WorkListAction.set.type, payload: list })
    })
  }

  return (
    <div>
      <p>
        並び順:
        <select value={sortValue} onChange={e => setSortValue(e.currentTarget.value)}>
          <option value="desc">新しい順</option>
          <option value="asc">古い順</option>
        </select>

        タイトル:
        <input type='text' value={filterTitle} onChange={e => setFilterTitle(e.currentTarget.value)} />
      </p>
      <input type='submit' value='検索する' onClick={e => handleClick(e)} />
    </div>
  )
}
