import { Tool, unmount } from './components';
import './resetStyle.less';

console.log('x-draw-extention loading····');
let toolNode = null;
let currentUrlScheme = 'bear://x-callback-url/create?type=html&title=$title$&text=$content$&url=$url$&tags=read';

chrome.storage.sync.get(({ urlScheme }) => {
    if (urlScheme) currentUrlScheme = urlScheme;
});


chrome.runtime.onMessage.addListener(({ drawOpen }) => {
    if (!toolNode && drawOpen) {
        toolNode = Tool.render({
            handleFetch: (node) => {
                if (!node) return;
                let xurl = currentUrlScheme;
                const article = {
                    title: node.innerText.split('\n')[0].slice(0, 20),
                    content: node.innerHTML,
                    url: location.href
                };
                Object.keys(article).forEach((key) => {
                    xurl = xurl.replace(`$${key}$`, encodeURIComponent(article[key]));
                });
                console.log(xurl);
                window.location.assign(xurl);
                toolNode = unmount(toolNode);
            },
            handleClose: () => {
                toolNode = unmount(toolNode);
            }
        });
    }
});
