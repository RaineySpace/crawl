import React, { PropTypes } from 'react';
import HomePage from './HomePage';
import SettingPage from './SettingPage';
import './style.less';



const Content = ({ page, userInfo }) => {
    const PAGE_MAP = {
        home: <HomePage userInfo={userInfo} />,
        setting: <SettingPage userInfo={userInfo} />,
    };
    return (
        <div className="x-draw-content">
            {
                PAGE_MAP[page]
            }
        </div>
    );
};

Content.propTypes = {
    page: PropTypes.string.isRequired,
    userInfo: PropTypes.object
};

Content.defaultProps = {
    userInfo: {}
};

export default Content;
