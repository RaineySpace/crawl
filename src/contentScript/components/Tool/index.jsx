import React from 'react';
import ReactDOM from 'react-dom';
import Tool from './Tool';
import './style.less';

export default {
    render: (props) => {
        const toolNode = document.createElement('div');
        toolNode.id = 'x-draw-tool';
        document.body.appendChild(toolNode);
        ReactDOM.render(<Tool {...props} />, toolNode);
        return toolNode;
    },
};
