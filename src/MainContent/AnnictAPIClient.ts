import React, { useContext } from 'react'
import axios from 'axios';
import { Work } from '../types/Work'
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
      dispatch({
        type: LastResponseWorkListAction.set.type,
        payload: { workList: list, pagination: null }
      })
    })
  }
}
