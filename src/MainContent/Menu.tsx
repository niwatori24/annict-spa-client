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
            console.log('work', work);
            return <li
              data-hoge={"123"}
              onClick={() => props.setCurrentWork(work)}
            >{work.title}</li>
          })
        }
      </ul>
    </div>
  )
}
