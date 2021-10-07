import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import routerConfig from './router/index';
import 'antd/dist/antd.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        {routerConfig.routes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
