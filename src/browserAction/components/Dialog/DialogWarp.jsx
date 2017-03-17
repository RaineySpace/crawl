import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import LoginDialog from './LoginDialog';
import './style.less';

const DIALOG_MAP = {
    login: <LoginDialog />,
};

class DialogWarp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, type, handleClose } = this.props;
        const CurrentDialog = DIALOG_MAP[type] && DIALOG_MAP[type].type;
        return (
            <div className="x-draw-dialog-warp">
                <Icon type="close" onClick={handleClose} />
                <p className="x-draw-dialog-warp-title">{title}</p>
                {
                    CurrentDialog ? <CurrentDialog {...this.props} /> : null
                }
            </div>
        );
    }
}



DialogWarp.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
};
export default DialogWarp;
