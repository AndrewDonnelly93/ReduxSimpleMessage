import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openApp, closeApp} from '../actions/index';
import OpenedApp from './opened_app';
import ClosedApp from './closed_app';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.toggleApp) {
            return (
                <OpenedApp closeApp={this.props.closeApp}/>
            )
        }


        return (
            <ClosedApp openApp={this.props.openApp}/>
        )
    }
}

const mapStateToProps = ({toggleApp}) => {
    return {toggleApp};
};

export default connect(mapStateToProps, {openApp, closeApp})(App);