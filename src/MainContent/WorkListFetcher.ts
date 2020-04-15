import React, { useContext } from 'react'
import axios from 'axios';
import { Work } from '../types/Work'
import { AnnictAPI } from '../AnnictAPI'
import { store as WorkListStore } from '../stores/WorkListStoreProvider'
import { Action as WorkListAction } from '../actions/CurrentWork'

export const WorkListFetcher = {
  run: (dispatch: Function) => {
    const url: string = AnnictAPI.worksUrl([])
    axios.get(url, {}).then((res) => {
      const list: Work[] = []
      console.log(res.data)
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title })
      })
      dispatch({ type: WorkListAction.set.type, payload: list })
    })
  }
}
