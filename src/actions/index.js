const openApp = () => {
    return {
        type: 'OPEN_APP'
    }
};

const closeApp = () => {
    return {
        type: 'CLOSE_APP'
    }
};

export {openApp, closeApp};
