import React, {
  useMemo,
  useEffect,
  useState
} from 'react';
import { Episode } from './../types/Episode'

interface Props {
  episodes: Episode[]
}

export const MainContentEpisode: React.FC<Props> = props => {
  return (
    <div>
      {props.episodes.length > 0 && (
        <ul>
          { props.episodes.map((episode, i) => {
            return <li key={episode.id} >{episode.title}</li>
          })
          }
        </ul>
      )}
      {props.episodes.length === 0 && (
        <div>エピソードはありません。</div>
      )}
    </div>
  )
}
