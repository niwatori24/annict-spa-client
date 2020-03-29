import React, {
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import axios from 'axios';
import { Work } from './types/Work'
import { AnnictAPI } from './AnnictAPI'

export const MainContent: React.FC = () => {
  const [workList, setWorkList] = useState<Work[]>([]);
  const [currentWork, setCurrentWork] = useState(null);

  const getWorks = () => {
    const url: string = AnnictAPI.worksUrl()
    axios.get(url, {}).then((res) => {
      const list: Work[] = [];
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title });
      });
      setWorkList((prev) => {
        return list;
      });
    }).catch(console.error);
  };

  useEffect(() => {
    getWorks();
  }, [])

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu
        workList={workList}
        setCurrentWork={setCurrentWork}
      />
      <MainContentBody currentWork={currentWork} />
    </div>
  )
}
