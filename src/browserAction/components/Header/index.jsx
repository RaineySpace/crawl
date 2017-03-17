import React, { Component, PropTypes } from 'react';
import { Icon, Dropdown, Menu } from 'antd';
import Dialog from '../Dialog';
import './style.less';

const menuList = [{
    name: 'help',
    title: '帮助'
}];
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentWillMount() {
        chromep.storage.local.get('userInfo').then(({ userInfo }) => {
            this.setState({ userInfo });
        });
    }

    handleLoginClick() {
        Dialog.render({
            title: '用户登陆',
            type: 'login',
            handleClose: () => console.log('handleClose'),
            handleLoginDone: userInfo => this.setState({ userInfo })
        });
    }

    render() {
        const { userInfo } = this.state;
        const menu = (
            <Menu onClick={event => this.props.handleMenuClick(event)}>
                {
                    menuList.map(menuItem => (
                        <Menu.Item key={menuItem.name}>
                            {menuItem.title}
                        </Menu.Item>
                    ))
                }
            </Menu>
        );
        return (
            <div className="x-draw-header">
                <div className="left">
                    <Icon type="x-draw-user" />
                    {
                        userInfo ?
                            <span>{userInfo.nickname}</span>
                            : <span onClick={this.handleLoginClick}>登陆</span>
                    }
                </div>
                <div className="right">
                    <Dropdown trigger={['click']} overlay={menu} placement="bottomRight">
                        <Icon type="setting" />
                    </Dropdown>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    handleMenuClick: PropTypes.func.isRequired,
};

export default Header;
