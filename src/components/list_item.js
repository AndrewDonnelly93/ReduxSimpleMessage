import React, { Component } from 'react';
import {connect} from 'react-redux';
import {modifyItem, removeItem, restoreItem} from '../actions/modify_item';

const ActiveItem = (props) => {
    return (
        <div>
            <div className="form-group">
                <div>Item #{props.id}</div>
                <textarea
                    onChange={props.onTextChange}
                    value={props.text}
                    rows="3"
                />
                <button
                    className="btn btn-secondary "
                    onClick={() => props.removeItem(props.id)}>
                    Remove
                </button>
            </div>
        </div>
    )
};

const RemovedItem = (props) => {
    return (
        <div>
            <div className="form-group">
                <div>Item #{props.id}</div>
                <textarea
                    value=""
                    disabled="disabled"
                    rows="3"
                />
                <button
                    className="btn btn-secondary"
                    onClick={() => props.restoreItem(props.id)}>
                    Restore
                </button>
            </div>
        </div>
    )
};


class ListItem extends Component {
    constructor() {
        super();
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(e) {
        this.props.modifyItem(this.props.id, e.target.value);
    }

    render() {
        if (this.props.removed) {
            return (
                <RemovedItem {...this.props}/>
            );
        }

        return (
            <ActiveItem onTextChange={this.onTextChange} {...this.props}/>
        );
    }
}

export default connect(null, {modifyItem, removeItem, restoreItem})(ListItem);