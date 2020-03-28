import React from 'react';

interface Work {
  id: number
  title: string
};

interface Props {
  workList: Work[]
}

export const MainContentMenu: React.FC<Props> = props => {
  console.log(props.workList);
  return (
    <div style={{ flex: 1, background: 'red' }}>
      リストです
      <ul>
        { props.workList.map((work, i) => {
           console.log('work', work);
           return <li>{work.title}</li>
          })
        }
      </ul>
    </div>
  )
}
