import React from 'react';
import { Work } from './../types/Work'

interface Props {
  workList: Work[]
  setCurrentWork: Function
}

export const MainContentMenu: React.FC<Props> = props => {
  const handleClick = (work: Work) => {
    props.setCurrentWork(() => ({ id: work.id, title: work.title }))
  }

  return (
    <div style={{ flex: 1, background: 'red' }}>
      <ul>
        { props.workList.map((work, i) => {
            return <li
              key={work.id}
              onClick={(e) => { handleClick(work); e.preventDefault() }}
            ><a href='#'>{work.title}</a></li>
          })
        }
      </ul>
    </div>
  )
}
