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
        <div>
          <div>id: {props.currentWork.id}</div>
          <div>title: {props.currentWork.title}</div>
        </div>
      )}
      {props.currentWork.id === 0 && <EmptyBody />}
    </div>
  )
}
