/*
 * @Description: 登录页 demo
 * @Author: kivet
 * @Date: 2021-10-07 16:31:29
 * @LastEditTime: 2021-10-07 19:18:11
 */

import { FC } from 'react';
import { Button } from 'antd';
import styles from './index.module.less';

interface IProps {
  history: any;
}

const Login: FC<IProps> = (props: IProps) => {
  const onLogin = () => {
    props.history.push({
      pathname: '/home',
      params: {
        name: 'kivet',
      },
    });
  };

  return (
    <div className={styles.container}>
      <div>登录页</div>
      <div>
        <Button type='primary' onClick={onLogin}>
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
