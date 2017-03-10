import React from 'react';
import ReactDOM from 'react-dom';
import Tool from './Tool';
import './style.less';

export default {
    render: (handleFetch) => {
        const toolNode = document.createElement('div');
        toolNode.id = 'ry-tool';
        document.body.appendChild(toolNode);
        ReactDOM.render(<Tool handleFetch={handleFetch} />, toolNode);
        return toolNode;
    },
};
