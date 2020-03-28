import React from 'react';

interface Work {
  id: number
  title: string
};

interface Props {
  workList: Work[]
  setCurrentWork: Function
}

export const MainContentMenu: React.FC<Props> = props => {
  return (
    <div style={{ flex: 1, background: 'red' }}>
      <ul>
        { props.workList.map((work, i) => {
            return <li
              key={work.id}
              data-hoge={"123"}
              onClick={() =>
                props.setCurrentWork(() => ({ id: work.id, title: work.title }))
              }
            >{work.title}</li>
          })
        }
      </ul>
    </div>
  )
}
