/*
 * @Description: 首页 demo
 * @Author: kivet
 * @Date: 2021-10-07 16:31:29
 * @LastEditTime: 2021-10-07 19:18:22
 */

import { FC, useState } from 'react';
import { DatePicker } from 'antd';
import styles from './index.module.less';

interface IProps {}

const Home: FC<IProps> = (props: IProps) => {
  const [date, setDate] = useState<string>('');

  const onChange = (date: any, dateString: string) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  return (
    <div className={styles.container}>
      <div>首页, 选择时间：{date}</div>
      <div>
        <DatePicker onChange={onChange} />
      </div>
    </div>
  );
};

export default Home;
