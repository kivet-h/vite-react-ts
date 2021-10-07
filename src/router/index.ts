/*
 * @Description: 路由配置目录
 * @Author: kivet
 * @Date: 2021-10-07 16:27:24
 * @LastEditTime: 2021-10-07 16:46:48
 */
import Login from '../pages/Login';
import Home from '../pages/Home';

export default {
  routes: [
    { exact: true, path: '/', component: Login },
    { exact: true, path: '/home', component: Home },
  ],
};
