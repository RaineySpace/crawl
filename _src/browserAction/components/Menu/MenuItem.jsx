import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import classnames from 'classnames';

const MenuItem = ({ onClick, active, icon, title }) => (
    <div onClick={() => onClick()} className={classnames({ active, 'x-draw-menu-item': true })}>
        <Icon type={icon} />
        <span>{title}</span>
    </div>
);

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default MenuItem;
