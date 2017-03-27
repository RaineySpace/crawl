import { message } from 'antd';
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
                        article.url = location.href;
                        console.log(article);
                        chrome.storage.local.get(({ userInfo = {} }) => {
                            chrome.runtime.sendMessage(null, { actionType: 'addArticle', article, token: userInfo.token }, (code, msg) => {
                                if (code) {
                                    message.success(msg);
                                } else {
                                    message.error(msg);
                                }
                            });
                        });
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
