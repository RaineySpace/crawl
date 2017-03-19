import React from 'react';
import { Icon, Input, Button, message, Tag } from 'antd';
import './style.less';

class SettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            feedUrl: null,
            siteUrl: null,
            categories: ['a', 'b', 'c']
        };
        // TODO: categories更改前校验是否有重复
        // TODO: 样式修改
        // TODO: 网络请求
        this.hangeChangeCategories = this.hangeChangeCategories.bind(this);
    }

    componentWillMount() {

    }

    hangeChangeCategories(tag, action) {
        const { categories } = this.state;
        if (action === 'close') {
            this.setState({ categories: categories.filter(name => name !== tag) });
        }
    }

    render() {
        const { title, description, feedUrl, categories } = this.state;
        return (
            <div className="page x-draw-page">
                <p>
                    <Input
                        onChange={e => this.setState({ title: e.target.value })}
                        value={title}
                        addonBefore="标题"
                        placeholder="请输入您将要创建的rss的标题"
                    />
                </p>
                <p>
                    <Input
                        onChange={e => this.setState({ description: e.target.value })}
                        value={description}
                        type="textarea"
                        rows={4}
                        placeholder="请输入您将要创建的rss的介绍"
                    />
                </p>
                <p>
                    <Input
                        onChange={e => this.setState({ feedUrl: e.target.value, siteUrl: e.target.value })}
                        value={feedUrl}
                        addonBefore="FeedUrl:"
                        placeholder="FeedUrl"
                    />
                </p>
                <p>
                    <Input
                        onChange={e => this.setState({ feedUrl: e.target.value, siteUrl: e.target.value })}
                        addonBefore="categories:"
                        placeholder="categories"
                    />
                </p>
                <p>
                    {
                        categories.map(tag => (
                            <Tag key={tag} closable onClose={() => this.hangeChangeCategories(tag, 'close')}>{tag}</Tag>
                        ))
                    }
                </p>
            </div>
        );
    }
}

// FeaturesPage.propTypes = {
//     page: PropTypes.string. naqqv bisRequired,
// };

export default SettingPage;
