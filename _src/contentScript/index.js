import { message } from 'antd';
import { Tool, unmount, ParseModal } from './components';
import './resetStyle.less';

console.log('choose dom loading····');
let toolNode = null;
let parseModalNode = null;

const sendArticle = (article) => {
    chrome.storage.local.get(({ userInfo = {} }) => {
        chrome.runtime.sendMessage(null, { actionType: 'addArticle', article, token: userInfo.token }, (code, msg) => {
            if (code) {
                message.success(msg);
            } else {
                message.error(msg);
            }
        });
    });
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
