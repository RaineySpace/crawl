import { message } from 'antd';
import { Tool, unmount, ParseModal } from './components';
import './resetStyle.less';

console.log('x-draw-extention loading····');
let toolNode = null;
let parseModalNode = null;

const sendArticle = (article) => {
    const { title, content, url } = article;
    const xurl = `bear://x-callback-url/create?type=html&title=${encodeURIComponent(title)}&text=${encodeURIComponent(content)}&url=${encodeURIComponent(url)}`;
    window.location.assign(xurl);
    message.success('抓取过程执行完成');
    toolNode = unmount(toolNode);
};

chrome.runtime.onMessage.addListener(({ drawOpen }) => {
    if (!toolNode && drawOpen) {
        toolNode = Tool.render({
            handleFetch: (content) => {
                parseModalNode = ParseModal.render({
                    content,
                    onOk: (article) => {
                        parseModalNode = unmount(parseModalNode);
                        sendArticle(Object.assign({ url: location.href }, article));
                    },
                    onCancel: () => {
                        parseModalNode = unmount(parseModalNode);
                    }
                });
            },
            handleClose: () => {
                toolNode = unmount(toolNode);
            }
        });
    }
});
