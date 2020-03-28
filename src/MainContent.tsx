import React from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'

export function MainContent() {
  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu />
      <MainContentBody />
    </div>
  )
}
