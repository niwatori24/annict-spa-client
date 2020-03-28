import React, {
  useState,
  useEffect
} from 'react';
import { MainContentMenu } from './MainContent/Menu'
import { MainContentBody} from './MainContent/Body'
import axios from 'axios';

interface Work {
  id: number
  title: string
};

export const MainContent: React.FC = () => {
  const [workList, setWorkList] = useState<Work[]>([]);
  const getWorks = () => {
    var url = 'https://api.annict.com/v1/works?access_token=fdow1gkjI71ZbDLZj8IOzpYZYvuo8O7vKhd3vKKDzuI'
    axios.get(url, {}).then((res) => {
      const list: Work[] = [];
      res.data.works.map((w: any, i: number) => {
        list.push({ id: w.id, title: w.title });
      });
      console.log('done getWorks!! with:', list);
      setWorkList((prev) => {
        return list;
      });

      // console.log('complate request.data: ', workList);
    }).catch(console.error);
  };

  useEffect(() => {
    getWorks();
  });

  return (
    <div style={{ display: 'flex', width: '700px' }}>
      <MainContentMenu workList={workList} />
      <MainContentBody />
    </div>
  )
}
