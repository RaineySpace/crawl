import React from 'react';
// import ChromePromise from 'chrome-promise';
import { render } from 'react-dom';
import App from './app';
// 封装好的chrome
// window.chromep = new ChromePromise();

render(<App />, document.getElementById('root'));
