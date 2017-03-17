import React, { PropTypes, Component } from 'react';

import { Modal, Button } from 'antd';


class ParseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleParse = this.handleParse.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleParse() {
        const { content } = this.props;
        console.log(content);
    }

    render() {
        const { onOk, onCancel } = this.props;
        return (
            <Modal
                title="解析内容"
                visible
                width="400px"
                onOk={onOk}
                onCancel={onCancel}
                wrapClassName="x-draw-parse-modal"
            >
                <Button onClick={this.handleParse}>en</Button>
            </Modal>
        );
    }
}

ParseModal.defaultProps = {
    onOk: null,
    onCancel: null,
};

ParseModal.propTypes = {
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    content: PropTypes.any.isRequired
};

export default ParseModal;
