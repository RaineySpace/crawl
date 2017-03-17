import React from 'react';
import ReactDOM from 'react-dom';
import DialogWarp from './DialogWarp';
import unmount from '../unmount';
import './style.less';

export default {
    render: (props) => {
        const dialogNode = document.createElement('div');
        dialogNode.id = 'x-draw-dialog-warp';
        document.body.appendChild(dialogNode);
        const handleClose = () => {
            unmount(dialogNode);
            if (props.handleClose) props.handleClose();
        };
        ReactDOM.render(<DialogWarp {...props} handleClose={handleClose} />, dialogNode);
        return dialogNode;
    },
};
