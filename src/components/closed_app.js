import React from 'react';

export default ({openApp}) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-xs-6">
                <button
                    className="btn btn-secondary"
                    onClick={() => openApp()}>
                    Open App
                </button>
            </div>
        </div>
    )
};