import React, {
  useMemo,
  useEffect,
  useState
} from 'react';
import { Episode } from './../types/Episode'
type EpisodeList = Episode[] | null

interface Props {
  episodes: EpisodeList
}

export const MainContentEpisode: React.FC<Props> = props => {
  return (
    <div>
      {props.episodes === null && (
        <div>エピソードを取得中です。</div>
      )}
      {props.episodes && props.episodes.length > 0 && (
        <ul>
          { props.episodes.map((episode, i) => {
            return <li key={episode.id} >{episode.title}</li>
          })
          }
        </ul>
      )}
      {props.episodes && props.episodes.length === 0 && (
        <div>エピソードはありません。</div>
      )}
    </div>
  )
}
