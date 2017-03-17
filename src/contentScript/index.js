import { Tool, unmount, ParseModal } from './components';

console.log('choose dom loading····');
let toolNode = null;
let parseModalNode = null;
chrome.runtime.onMessage.addListener(({ drawOpen }) => {
    if (!toolNode && drawOpen) {
        toolNode = Tool.render({
            handleFetch: (content) => {
                parseModalNode = ParseModal.render({
                    content,
                    onOk: () => {
                        parseModalNode = unmount(parseModalNode);
                        console.log('onOk');
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
