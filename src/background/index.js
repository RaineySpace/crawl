import handleAction from './handleAction';

console.log('背景页面::', chrome);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const extensionId = chrome.app.getDetails().id;
    console.log('action::start', message, sender.id === extensionId);
    if (sender.id !== extensionId) return false;
    if (!handleAction[message.actionType]) throw new Error('请检查是否有此事件的处理函数');
    handleAction[message.actionType](message, sender, sendResponse);
    return true;
});
