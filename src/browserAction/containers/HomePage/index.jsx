import React from 'react';
import { Button } from 'antd';

import './style.less';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="page x-draw-page">
                <Button
                    onClick={() => chrome.tabs.query({ active: true, currentWindow: true }, tabs => chrome.tabs.sendMessage(tabs[0].id, { drawOpen: true }))}
                >
                    开启抓取
                </Button>
            </div>
        );
    }
}

// FeaturesPage.propTypes = {
//     page: PropTypes.string. naqqv bisRequired,
// };

export default HomePage;
