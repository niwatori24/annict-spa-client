import React, { useContext } from 'react'
import axios from 'axios';
import { Work } from '../types/Work'
import { Pagination } from '../types/Pagination'

import { LastResponseWorkList } from '../types/LastResponseWorkList'
import { AnnictAPI } from '../AnnictAPI'
import { Action as LastResponseWorkListAction } from '../actions/LastResponseWorkList'

export const WorkListFetcher = {
  run: (dispatch: Function, url: string) => {
    dispatch({ type: LastResponseWorkListAction.reset.type })
    axios.get(url, {}).then((res) => {
      const list: Work[] = []
      console.log(res.data)
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title })
      })
      const pagination: Pagination = {
        totalCount: res.data.total_count,
        nextPage: res.data.next_page,
        prevPage: res.data.prev_page
      }

      dispatch({
        type: LastResponseWorkListAction.set.type,
        payload: { workList: list, pagination: pagination }
      })
    })
  }
}
