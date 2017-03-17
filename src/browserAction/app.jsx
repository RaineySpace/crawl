import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
// import Dialog from './components/Dialog';
import Content from './containers';
import config from './config';

const { MENU_MAP } = config;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTag: 'home'
        };
    }

    // componentWillReceiveProps(nextProps) {
    //
    // }

    handleMenuClick(e) {
        console.log(e);
    }

    render() {
        const { activeTag } = this.state;
        return (
            <div className="x-draw-app">
                <Header handleMenuClick={this.handleMenuClick} />
                <Menu
                    active={activeTag}
                    menuList={Object.keys(MENU_MAP).map(key => MENU_MAP[key])}
                    onChange={tagName => this.setState({ activeTag: tagName })}
                />
                <Content page={activeTag} />
            </div>
        );
    }
}

export default App;
