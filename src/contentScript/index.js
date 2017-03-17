import { Tool, unmount, ParseModal } from './components';
import './resetStyle.less';

console.log('choose dom loading····');
let toolNode = null;
let parseModalNode = null;
chrome.runtime.onMessage.addListener(({ drawOpen }) => {
    if (!toolNode && drawOpen) {
        toolNode = Tool.render({
            handleFetch: (content) => {
                parseModalNode = ParseModal.render({
                    content,
                    onOk: (article) => {
                        parseModalNode = unmount(parseModalNode);
                        console.log(article);
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
