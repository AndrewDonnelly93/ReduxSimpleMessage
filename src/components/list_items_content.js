import React from 'react';
import {connect} from 'react-redux';

const ListItemsContent = ({items}) =>{
    const activeItems = items.filter(
        (item) => !item.removed
    );

    if (items.length === 0) {
        return (
            <div>No items have been added yet.</div>
        )
    }

    return (
        <ul className="list-text-content">
            {activeItems.map(
                (item) => {
                    return (
                      <li className="text-help" key={item.id}>
                          {item.text || "No text has been entered yet."}
                      </li>
                    );
                }
            )}
        </ul>
    );
};

const mapStateToProps = ({items}) => {
  return {items};
};

export default connect(mapStateToProps)(ListItemsContent);