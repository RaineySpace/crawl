import React, { PropTypes } from 'react';
import MenuItem from './MenuItem';

import './style.less';

const Menu = ({ active, menuList, onChange }) => (
    <div className="x-draw-menu">
        {
            menuList.map(menu => (
                <MenuItem
                    key={menu.name}
                    icon={menu.icon}
                    title={menu.title}
                    active={active === menu.name}
                    onClick={() => onChange(menu.name)}
                />
            ))
        }
    </div>
);

Menu.propTypes = {
    menuList: PropTypes.arrayOf(PropTypes.object).isRequired,
    active: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Menu;
