import React, { PropTypes } from 'react';
import { Icon, Dropdown, Menu } from 'antd';
// import Dialog from '../Dialog';
import './style.less';

const menuList = [{
    name: 'logout',
    title: '注销'
}, {
    name: 'help',
    title: '帮助'
}];



const Header = ({ userInfo, handleLoginClick, handleMenuClick }) => {
    const menu = (
        <Menu onClick={handleMenuClick}>
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
                        : <span onClick={handleLoginClick}>登陆</span>
                }
            </div>
            <div className="right">
                <Dropdown trigger={['click']} overlay={menu} placement="bottomRight">
                    <Icon type="setting" />
                </Dropdown>
            </div>
        </div>
    );
};

Header.defaultProps = {
    userInfo: null
};

Header.propTypes = {
    handleMenuClick: PropTypes.func.isRequired,
    handleLoginClick: PropTypes.func.isRequired,
    userInfo: PropTypes.any
};

export default Header;
