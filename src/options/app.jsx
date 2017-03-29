import React from 'react';

const defaultSettingMap = {
    urlScheme: 'bear://x-callback-url/create?type=html&title=$title$&text=$content$&url=$url$'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultSettingMap;
    }

    componentWillMount() {
        chrome.storage.sync.get(settingMap => this.setState(settingMap));
    }

    handleChange(settingMap) {
        chrome.storage.sync.set(settingMap, () => this.setState(settingMap));
    }

    render() {
        const { urlScheme } = this.state;
        return (
            <div className="setting">
                <div className="setting-header">
                    <h1>设置</h1>
                </div>
                <div className="setting-content">
                    <div className="option">
                        <span>URL Scheme:</span>
                        <input value={urlScheme} onChange={e => this.handleChange({ urlScheme: e.target.value })} />
                    </div>
                </div>
                <div className="setting-footer">
                    © 2017 XueRainey
                </div>
            </div>
        );
    }
}

export default App;
