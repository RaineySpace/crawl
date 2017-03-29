import React from 'react';
import { message } from 'antd';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './containers';
import Dialog from './components/Dialog';
import config from './config';

const { MENU_MAP } = config;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTag: 'home',
            userInfo: undefined
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    componentWillMount() {
        chromep.storage.local.get('userInfo').then(({ userInfo }) => {
            this.setState({ userInfo });
        });
    }

    handleMenuClick({ key }) {
        if (key === 'logout') {
            chromep.storage.local.set({ userInfo: undefined }).then(() => {
                message.success('退出账号成功');
                this.setState({ userInfo: undefined });
            });
        }
        if (key === 'help') {
            message.success('想要帮助？哼！！');
        }
    }

    handleLoginClick() {
        Dialog.render({
            title: '用户登陆',
            type: 'login',
            handleClose: () => console.log('handleClose'),
            handleLoginDone: userInfo => this.setState({ userInfo }, () => message.success(`您好，${userInfo.nickname}!`))
        });
    }

    render() {
        const { activeTag, userInfo } = this.state;
        return (
            <div className="x-draw-app">
                <Header userInfo={userInfo} handleMenuClick={this.handleMenuClick} handleLoginClick={this.handleLoginClick} />
                <Menu
                    active={activeTag}
                    menuList={Object.keys(MENU_MAP).map(key => MENU_MAP[key])}
                    onChange={tagName => this.setState({ activeTag: tagName })}
                />
                <Content page={activeTag} userInfo={userInfo} />
            </div>
        );
    }
}

export default App;
