import React from 'react';
import { EmptyBody } from './EmptyBody'
import { Work } from './../Work'

interface Props {
  currentWork: Work
}

export const MainContentBody: React.FC<Props> = props => {
  return (
    <div style={{ flex: 1, background: 'yellow' }}>
      {props.currentWork.id > 0 && (
        <p>id: {props.currentWork.id}<br />
        title: {props.currentWork.title}</p>
      )}
      {props.currentWork.id === 0 && (
        <p>ここにタイトルが表示されます</p>
      )}
    </div>
  )
}
