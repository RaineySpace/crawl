import React from 'react';
import ReactDOM from 'react-dom';
import ParseModal from './ParseModal';
import './style.less';

export default {
    render: (props) => {
        const ParseModalNode = document.createElement('div');
        ParseModalNode.id = 'x-draw-parse-modal';
        document.body.appendChild(ParseModalNode);
        ReactDOM.render(<ParseModal {...props} />, ParseModalNode);
        return ParseModalNode;
    },
};
