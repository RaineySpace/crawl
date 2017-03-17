import React, { PropTypes } from 'react';
import HomePage from './HomePage';
import SettingPage from './SettingPage';
import './style.less';

const PAGE_MAP = {
    home: <HomePage />,
    setting: <SettingPage />,
};

const Content = ({ page }) => (
    <div className="x-draw-content">
        {
            PAGE_MAP[page]
        }
    </div>
);

Content.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Content;
