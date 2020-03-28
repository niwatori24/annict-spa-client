import React, {
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import axios from 'axios';
import { Work } from './Work'

export const MainContent: React.FC = () => {
  const [workList, setWorkList] = useState<Work[]>([]);
  const [currentWork, setCurrentWork] = useState({ id: 0, title: '' });

  const getWorks = () => {
    var url = `https://api.annict.com/v1/works?access_token=${process.env.REACT_APP_ANNICT_API_TOKEN}`
    axios.get(url, {}).then((res) => {
      const list: Work[] = [];
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title });
      });
      // console.log('done getWorks!! with:', list);
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
