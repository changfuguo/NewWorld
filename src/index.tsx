import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import {Button} from 'antd'
// import '@/assets/styles/app.less';
import '@/index.less';
ReactDOM.render((
    <ConfigProvider locale={zh_CN}>
      <Button className="es-ant-btn" type="primary">常富国xx</Button>
    </ConfigProvider>
), document.getElementById('root'));
