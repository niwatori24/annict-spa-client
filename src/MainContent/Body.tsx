import React, {
  useMemo,
  useEffect,
  useState
} from 'react';
import { EmptyBody } from './EmptyBody'
import { MainContentEpisode } from './Episode'
import { Work } from './../types/Work'
import { Episode } from './../types/Episode'
import axios from 'axios'
import { AnnictAPI } from './../AnnictAPI'

interface Props {
  currentWork: Work | null
}

export const MainContentBody: React.FC<Props> = props => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  useEffect(() => {
    setEpisodes((prev) => { return [] });
    getEpisodes()
  }, [props.currentWork ? props.currentWork.id : props.currentWork]);

  const getEpisodes = () => {
    if(props.currentWork === null) { return }
    const url: string = AnnictAPI.episodesUrl(props.currentWork.id)
    axios.get(url, {}).then((res) => {
      const list: Episode[] = [];
      res.data.episodes.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title });
      });
      setEpisodes((prev) => {
        return list
      });
    }).catch(console.error);
  }

  return (
    <div style={{ flex: 1, background: 'yellow' }}>
      {props.currentWork && (
        <div>
          <div>id: {props.currentWork.id}</div>
          <div>title: {props.currentWork.title}</div>
          <MainContentEpisode episodes={episodes} />
        </div>
      )}
      {props.currentWork === null && <EmptyBody />}
    </div>
  )
}
