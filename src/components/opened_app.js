import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/modify_item';
import ListItems from './list_items';
import ListItemsContent from './list_items_content';

const OpenedApp = ({closeApp, addItem}) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-xs-6">
                <button
                    className="btn btn-secondary -close"
                    onClick={() => closeApp()}>
                    Close App
                </button>
                <ListItemsContent/>
            </div>
            <div className="col-sm-6 col-xs-6 -contrast">
                <ListItems/>
                <button
                    className="btn btn-secondary -add"
                    onClick={() => addItem()}>
                    Add Item
                </button>
            </div>
        </div>
    )
};

export default connect(null, {addItem})(OpenedApp);