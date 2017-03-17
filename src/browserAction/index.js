import React from 'react';
// import ChromePromise from 'chrome-promise';
import { render } from 'react-dom';
import App from './app';
import './style.less';

// 封装好的chrome
// window.chromep = new ChromePromise();

render(<App />, document.getElementById('root'));
