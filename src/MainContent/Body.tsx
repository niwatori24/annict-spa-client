import React, {
  useMemo,
  useEffect,
  useState
} from 'react';
import { EmptyBody } from './EmptyBody'
import { MainContentEpisode as Episode } from './Episode'
import { Work } from './../Work'
import axios from 'axios'

interface Props {
  currentWork: Work
}
interface Episode {
  id: number
  title: string
}

export const MainContentBody: React.FC<Props> = props => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  useEffect(() => {
    getEpisodes()
  }, [props.currentWork.id]);

  const getEpisodes = () => {
    if(props.currentWork.id === 0) { return }
    const url: string = `https://api.annict.com/v1/episodes?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}&filter_work_id=${props.currentWork.id}`
    axios.get(url, {}).then((res) => {
      const list: Episode[] = [];
      res.data.episodes.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title });
      });
      setEpisodes((prev) => {
        return list;
      });
    }).catch(console.error);
  }

  return (
    <div style={{ flex: 1, background: 'yellow' }}>
      {props.currentWork.id > 0 && (
        <div>
          <div>id: {props.currentWork.id}</div>
          <div>title: {props.currentWork.title}</div>
          <Episode episodes={episodes} />
        </div>
      )}
      {props.currentWork.id === 0 && <EmptyBody />}
    </div>
  )
}
