import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Button } from 'antd';


class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetList: [],
            select: 0
        };
        this.handleChangeTargetList = this.handleChangeTargetList.bind(this);
        this.handleSelectTarget = this.handleSelectTarget.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleChangeTargetList);
        document.body.style.paddingTop = '50px';
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleChangeTargetList);
        document.body.style.paddingTop = '';
    }

    handleChangeTargetList({ target }) {
        const oldNode = this.state.targetList[this.state.select];
        if (oldNode) oldNode.style.boxShadow = '';
        let current = target;
        let isValid = true;
        const targetList = [];
        while (current.parentNode) {
            if (current.id === 'x-draw-tool') {
                isValid = false;
                break;
            }
            targetList.push(current);
            current = current.parentNode;
        }
        targetList.reverse();
        console.log(targetList);
        // targetList[targetList.length - 1].style.border = '1px solid #ccc';
        if (isValid) {
            this.setState({ targetList }, () => this.handleSelectTarget(targetList.length - 1));
        }
    }

    handleSelectTarget(index) {
        const { select, targetList } = this.state;
        const oldNode = targetList[select];
        const currentNode = targetList[index];
        console.log(targetList, oldNode, currentNode);
        if (oldNode) oldNode.style.boxShadow = '';
        currentNode.style.boxShadow = '0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2)';
        this.setState({
            select: index
        });
    }

    handleFetch() {
        const { select, targetList } = this.state;
        this.props.handleFetch(targetList[select]);
    }


    render() {
        const { targetList, select } = this.state;
        return (
            <div className="x-draw-tool">
                {
                    targetList.map((target, index) => (
                        <span
                            className={classnames({
                                'x-draw-tool-target': true,
                                select: select === index
                            })}
                            onClick={() => this.handleSelectTarget(index)}
                            key={index}
                        >
                            {target.tagName}
                            {
                                target.classList[0] ?
                                    `.${target.classList[0]}`
                                    : null
                            }
                        </span>
                    ))
                }
                <Button onClick={this.props.handleClose} className="x-draw-tool-close">关闭</Button>
                <Button onClick={this.handleFetch} className="x-draw-tool-fetch">提取</Button>
            </div>
        );
    }
}

// Tool.defaultProps = {
//     targetList: []
// };

Tool.propTypes = {
    handleFetch: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Tool;
