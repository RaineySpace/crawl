import ReactDOM from 'react-dom';

export default (dom) => {
    const unmountResult = ReactDOM.unmountComponentAtNode(dom);
    if (unmountResult && dom.parentNode) {
        dom.parentNode.removeChild(dom);
    }
};
