import { Tool } from './components';

console.log('choose dom loading····');


Tool.render((target) => {
    console.log('您抓取的信息如下');
    console.log(target.innerHTML);
});
