import React, {
  useMemo,
  useEffect,
  useState
} from 'react';

interface Episode {
  id: number
  title: string
}

interface Props {
  episodes: Episode[]
}

export const MainContentEpisode: React.FC<Props> = props => {
  return (
    <ul>
      { props.episodes.map((episode, i) => {
          return <li key={episode.id} >{episode.title}</li>
        })
      }
    </ul>
  )
}
