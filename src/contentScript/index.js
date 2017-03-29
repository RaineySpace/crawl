import { Tool, unmount } from './components';
import './resetStyle.less';

console.log('x-draw-extention loading····');
let toolNode = null;
// let parseModalNode = null;
const urlScheme = 'bear://x-callback-url/create?type=html&title=$title$&text=$content$&url=$url$';

const sendArticle = ({ title = 'default title', content = 'default content', url = location.href }) => {
    const article = { title, content, url };
    let xurl = urlScheme;
    Object.keys(article).forEach((key) => {
        xurl = xurl.replace(`$${key}$`, encodeURIComponent(article[key]));
    });
    console.log(xurl, article);
    window.location.assign(xurl);
    // message.success('抓取过程执行完成');
    // toolNode = unmount(toolNode);
};

chrome.runtime.onMessage.addListener(({ drawOpen }) => {
    if (!toolNode && drawOpen) {
        toolNode = Tool.render({
            handleFetch: (node) => {
                sendArticle({
                    content: node.innerHTML
                });
            },
            handleClose: () => {
                toolNode = unmount(toolNode);
            }
        });
    }
});
