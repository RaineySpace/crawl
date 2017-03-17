import { Tool } from './components';
import unmount from './components/unmount';

console.log('choose dom loading····');
let toolNode = null;
chrome.runtime.onMessage.addListener(({ drawOpen }) => {
    if (!toolNode && drawOpen) {
        toolNode = Tool.render((target) => {
            console.log('您抓取的信息如下');
            console.log(target.innerHTML);
        }, () => {
            toolNode = unmount(toolNode);
        });
    }
});
