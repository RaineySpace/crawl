import React, { PropTypes, Component } from 'react';

import { Modal, Input } from 'antd';


class ParseModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const { content } = this.props;
        this.setState({
            title: content.innerText.split('\n')[0].slice(0, 20),
            content: content.innerHTML
        });
    }

    componentWillUnmount() {

    }


    render() {
        const { onOk, onCancel } = this.props;
        const { title, content } = this.state;
        return (
            <Modal
                title="解析内容"
                visible
                width="1000px"
                height="600px"
                onOk={() => onOk(this.state)}
                onCancel={onCancel}
                wrapClassName="x-draw-parse-modal"
            >
                <span className="x-draw-parse-modal-title">
                    <Input
                        onChange={({ target }) => this.setState({ title: target.value })}
                        value={title}
                        addonBefore="标题："
                        defaultValue="标题"
                    />
                </span>
                <div className="x-draw-parse-modal-content" dangerouslySetInnerHTML={{ __html: content }} />

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
