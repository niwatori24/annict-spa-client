import React, {
  useMemo,
  useEffect,
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

interface Props {
  currentWork: Work | null
}
interface Pagination {
  totalCount: number
  nextPage: number | null
  prevPage: number | null
}
type PaginationType = Pagination | null

type EpisodeList = Episode[] | null

export const MainContentBody: React.FC<Props> = props => {
  const [episodes, setEpisodes] = useState<EpisodeList>([])
  const [pagination, setPagination] = useState<PaginationType>(null)

  useEffect(() => {
    setEpisodes((prev) => { return null });
    getEpisodes(1)
  }, [props.currentWork ? props.currentWork.id : props.currentWork]);

  const getEpisodes = (page: number) => {
    if(props.currentWork === null) { return }
    setPagination(prev => (null))
    const url: string = AnnictAPI.episodesUrl(props.currentWork.id, page)
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

  const prevPageHandleClick = () => {
    getEpisodes(1)
  }

  const nextPageHandleClick = () => {
    getEpisodes(2)
  }


  return (
    <div style={{ flex: 1, background: 'yellow' }}>
      {props.currentWork && (
        <div>
          <div>id: {props.currentWork.id}</div>
          <div>title: {props.currentWork.title}</div>
          <PaginationComponent
            pagination={pagination}
            nextPageHandleClick={nextPageHandleClick}
            prevPageHandleClick={prevPageHandleClick}
          />
          <MainContentEpisode episodes={episodes} />
          <PaginationComponent
            pagination={pagination}
            nextPageHandleClick={nextPageHandleClick}
            prevPageHandleClick={prevPageHandleClick}
          />
        </div>
      )}
      {props.currentWork === null && <EmptyBody />}
    </div>
  )
}
