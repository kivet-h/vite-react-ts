/*
 * @Description: 首页 demo
 * @Author: kivet
 * @Date: 2021-10-07 16:31:29
 * @LastEditTime: 2021-10-07 18:07:17
 */

import { FC, useEffect, useState } from 'react';
import { DatePicker } from 'antd';

interface IProps {}

const Home: FC<IProps> = (props: IProps) => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    console.log('===props', props);
  }, []);

  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  return (
    <div>
      <div>首页, 选择时间：{date}</div>
      <div>
        <DatePicker onChange={onChange} />
      </div>
    </div>
  );
};

export default Home;
