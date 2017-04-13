import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from './list_item';

class ListItems extends Component {
    render() {
        if (this.props.items.length === 0) {
            return (
                <div>No items have been added yet.</div>
            )
        }

        return (
            <ul className="list-items">
                {this.props.items.map(
                    (item) => {
                       return <ListItem key={item.id} {...item}/>
                   }
                )}
            </ul>
        );
    }
}

const mapStateToProps = ({items}) => {
    return {items};
};

export default connect(mapStateToProps)(ListItems);