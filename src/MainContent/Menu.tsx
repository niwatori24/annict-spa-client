import React from 'react';
import { Work } from './../Work'

interface Props {
  workList: Work[]
  setCurrentWork: Function
}

export const MainContentMenu: React.FC<Props> = props => {
  const handleClick = (work: Work) => {
    props.setCurrentWork(() => ({ id: work.id, title: work.title }))
    return false
  }

  return (
    <div style={{ flex: 1, background: 'red' }}>
      <ul>
        { props.workList.map((work, i) => {
            return <li
              key={work.id}
              data-hoge={"123"}
              onClick={() => { handleClick(work)  }}
            ><a href='#'>{work.title}</a></li>
          })
        }
      </ul>
    </div>
  )
}
