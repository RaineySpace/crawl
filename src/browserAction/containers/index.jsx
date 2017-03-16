import React, { PropTypes } from 'react';
import FeaturesPage from './features';
import './style.less';

const PAGE_MAP = {
    main: <FeaturesPage />,
    setting: <FeaturesPage />,
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
