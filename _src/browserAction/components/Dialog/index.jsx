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
            dialogNode.style.top = '440px';
            setTimeout(() => {
                unmount(dialogNode);
            }, 300);
            if (props.handleClose) props.handleClose();
        };
        ReactDOM.render(<DialogWarp {...props} handleClose={handleClose} />, dialogNode);
        setTimeout(() => {
            dialogNode.style.top = '0px';
        }, 100);
        return dialogNode;
    },
};
