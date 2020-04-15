import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Work } from '../../types/Work'
import { AnnictAPI, worksUrlParams } from '../../AnnictAPI'
import { store as LastResponseWorkListStore } from '../../stores/LastResponseWorkListStoreProvider'
import { store as WorkListSearchFromStore } from '../../stores/WorkListSearchFromStoreProvider'
import { Action as WorkListAction } from '../../actions/CurrentWork'
import { Action as WorkListSearchFromAction } from '../../actions/WorkListSearchFrom'
import { WorkListFetcher } from '../../MainContent/AnnictAPIClient'

export const WorkListSearchFrom: React.FC = () => {
  const { lastResponseWorkList, lastResponseWorkListDispatch } = useContext(LastResponseWorkListStore)
  const { form, formDispatch } = useContext(WorkListSearchFromStore)

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const url: string = AnnictAPI.worksUrl({ sortValue: form.sortValue, filterTitle: form.filterTitle } as worksUrlParams)
    WorkListFetcher.run(lastResponseWorkListDispatch, url)
  }
  const setSortValue = (value: string) => {
    formDispatch({ type: WorkListSearchFromAction.set.type, payload: { sortValue: value } })
  }
  const setFilterTitle = (value: string) => {
    formDispatch({ type: WorkListSearchFromAction.set.type, payload: { filterTitle: value } })
  }

  return (
    <div>
      <p>
        並び順:
        <select defaultValue={form.sortValue} onChange={e => setSortValue(e.currentTarget.value)}>
          <option value="desc">新しい順</option>
          <option value="asc">古い順</option>
        </select>

        タイトル:
        <input type='text' defaultValue={form.filterTitle} onChange={e => setFilterTitle(e.currentTarget.value)} />
      </p>
      <input type='submit' value='検索する' onClick={e => handleClick(e)} />
    </div>
  )
}
