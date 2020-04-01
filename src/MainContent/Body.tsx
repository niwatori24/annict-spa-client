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
    getEpisodes()
  }, [props.currentWork ? props.currentWork.id : props.currentWork]);

  const getEpisodes = () => {
    if(props.currentWork === null) { return }
    setPagination(prev => (null))
    const url: string = AnnictAPI.episodesUrl(props.currentWork.id)
    axios.get(url, {}).then((res) => {
      let list: EpisodeList = [];
      console.log('episodeUrl res.data:', res.data)
      setPagination((prev) => ({
        totalCount: res.data.total_count,
        nextPage: res.data.next_page,
        prevPage: res.data.prev_page
      }))
      res.data.episodes.map((w: any, i: number) => {
        if(list === null) { return }
        list.push({ id: w.id, title: w.title })
      });
      setEpisodes((prev) => (list))
    }).catch(console.error);
  }

  return (
    <div style={{ flex: 1, background: 'yellow' }}>
      {props.currentWork && (
        <div>
          <div>id: {props.currentWork.id}</div>
          <div>title: {props.currentWork.title}</div>
          <MainContentEpisode episodes={episodes} />
          <PaginationComponent pagination={pagination} />
        </div>
      )}
      {props.currentWork === null && <EmptyBody />}
    </div>
  )
}
