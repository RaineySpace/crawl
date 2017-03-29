import React, { PropTypes } from 'react';
import { Input, Button, message, Tag } from 'antd';
import { API } from '../../config';
import './style.less';

class SettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            feedUrl: null,
            siteUrl: null,
            categories: []
        };
        this.handleAddCategories = this.handleAddCategories.bind(this);
        this.handleCommit = this.handleCommit.bind(this);
    }

    componentWillMount() {
        const { userInfo } = this.props;
        fetch(`${API.feed}?token=${userInfo.token}`)
            .then(res => res.json())
            .then((res) => {
                if (res.code) {
                    message.error(res.message);
                    return;
                }
                const { title, description, feedUrl, siteUrl, categories } = res.feedInfo;
                this.setState({ title, description, feedUrl, siteUrl, categories });
            })
            .catch(() => message.error('服务器或网络连接异常'));
    }

    handleAddCategories(e) {
        const { categories } = this.state;
        const value = e.target.value;
        if (categories.includes(value)) {
            message.warning('您已经添加过该分类！');
            return;
        }
        categories.push(value);
        this.setState({ categories });
    }

    handleCommit() {
        const { title, description, feedUrl, siteUrl, categories } = this.state;
        const option = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                feedUrl,
                siteUrl,
                categories,
                token: this.props.userInfo.token
            })
        };
        fetch(API.updateFeed, option)
            .then(res => res.json())
            .then((res) => {
                if (res.code) {
                    message.error(res.message);
                    return;
                }
                message.success(res.message);
            })
            .catch(() => message.error('服务器或网络连接异常'));
    }

    render() {
        const { title, description, feedUrl, categories } = this.state;
        return (
            <div className="page x-draw-setting-page">
                <div className="x-draw-setting-line">
                    <Input
                        onChange={e => this.setState({ title: e.target.value })}
                        value={title}
                        addonBefore="标题"
                        placeholder="请输入RSS的标题"
                    />
                </div>
                <div className="x-draw-setting-line">
                    <Input
                        onChange={e => this.setState({ description: e.target.value })}
                        value={description}
                        type="textarea"
                        rows={4}
                        placeholder="请输入RSS的介绍"
                    />
                </div>
                <div className="x-draw-setting-line">
                    <Input
                        onChange={e => this.setState({ feedUrl: e.target.value, siteUrl: e.target.value })}
                        value={feedUrl}
                        addonBefore="订阅链接"
                        placeholder="请输入订阅链接"
                    />
                </div>
                <div className="x-draw-setting-line">
                    <Input
                        onPressEnter={this.handleAddCategories}
                        addonBefore="分类:"
                        placeholder="输入分类名称后回车添加"
                    />
                </div>
                <div className="x-draw-setting-line">
                    {
                        categories.map(tag => (
                            <Tag
                                key={tag}
                                closable={tag !== 'default'}
                                onClose={() => this.setState({ categories: categories.filter(name => name !== tag) })}
                            >
                                {tag}
                            </Tag>
                        ))
                    }
                </div>
                <div className="x-draw-setting-line">
                    <Button onClick={this.handleCommit}>提交</Button>
                </div>
            </div>
        );
    }
}

SettingPage.propTypes = {
    userInfo: PropTypes.any.isRequired,
};

export default SettingPage;
