import React from 'react';
import './style.less';

class SettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="page x-draw-page">
                SettingPage
            </div>
        );
    }
}

// FeaturesPage.propTypes = {
//     page: PropTypes.string. naqqv bisRequired,
// };

export default SettingPage;
