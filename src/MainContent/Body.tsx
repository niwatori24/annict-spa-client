import React, {
  useMemo,
  useEffect,
  useContext,
  useState
} from 'react';
// components
import { AnnictAPI } from '../AnnictAPI'
import { EmptyBody } from './EmptyBody'
import { MainContentEpisode } from './Episode'
import { PaginationComponent } from './PaginationComponent'
// types
import { Work } from './../types/Work'
import { Episode } from './../types/Episode'
import { AnnictEpisode } from './../types/AnnictEpisode'
// libs
import axios from 'axios'
// store
import { store as CurrentStore } from '../stores/CurrentWorkStoreProvider'
// action
import { Action as CurrentWorkAction } from '../actions/CurrentWork'

interface Props {
}

interface Pagination {
  totalCount: number
  nextPage: number | null
  prevPage: number | null
}
type PaginationType = Pagination | null

type EpisodeList = Episode[] | null

export const MainContentBody: React.FC<Props> = props => {
  const { currentWork, currentWorkDispatch } = useContext(CurrentStore)

  const [episodes, setEpisodes] = useState([] as EpisodeList)
  const [pagination, setPagination] = useState(null as PaginationType)

  useEffect(() => {
    resetContent()
    getEpisodes(1)
  }, [currentWork ? currentWork.id : currentWork]);

  const getEpisodes = (page: number) => {
    if(currentWork === null) { return }
    resetContent()
    const url: string = AnnictAPI.episodesUrl(currentWork.id, page)
    axios.get(url, {}).then((res) => {
      let list: EpisodeList = [];
      console.log('episodeUrl res.data:', res.data)
      setPagination((prev) => ({
        totalCount: res.data.total_count,
        nextPage: res.data.next_page,
        prevPage: res.data.prev_page
      }))
      res.data.episodes.map((ep: AnnictEpisode, i: number) => {
        if(list === null) { return }
        list.push({ id: ep.id, title: ep.title, episode_number: ep.number, episode_text: ep.number_text })
      });
      setEpisodes((prev) => (list))
    }).catch(console.error);
  }

  const prevPageHandleClick = (page: number) => {
    resetContent()
    getEpisodes(page)
  }

  const nextPageHandleClick = (page: number) => {
    resetContent()
    getEpisodes(page)
  }

  const resetContent = () => {
    setEpisodes((prev) => (null));
    setPagination(prev => (null))
  }

  return (
    <div style={{ flex: 1, background: 'yellow' }}>
      {currentWork && (
        <div>
          <div>id: {currentWork.id}</div>
          <div>title: {currentWork.title}</div>
          <PaginationComponent
            pagination={pagination}
            nextPageHandleClick={nextPageHandleClick}
            prevPageHandleClick={prevPageHandleClick}
          />
          <MainContentEpisode episodes={episodes} />
          <a href='#' onClick={e => currentWorkDispatch({ type: CurrentWorkAction.reset.type })}>トップページを表示する</a>
        </div>
      )}
      {currentWork === null && <EmptyBody />}
    </div>
  )
}
