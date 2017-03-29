import { API } from '../config';

console.log('背景页面::', chrome);

const addArticle = ({ article, token }, _, sendResponse) => {
    const option = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify(Object.assign(article, { token }))
    };
    console.log(option);
    fetch(API.addArticle, option)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                sendResponse(res);
            })
            .catch(() => sendResponse(10, '服务器或网络连接异常'));
};

const handleAction = {
    addArticle
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const extensionId = chrome.app.getDetails().id;
    console.log('action::start', message, sender.id === extensionId);
    if (sender.id !== extensionId) return false;
    if (!handleAction[message.actionType]) throw new Error('请检查是否有此事件的处理函数');
    handleAction[message.actionType](message, sender, sendResponse);
    return true;
});
