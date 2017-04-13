let itemId = 0;

const addItem = () => {
    return {
        type: 'ADD_ITEM',
        id: itemId++
    }
};

const modifyItem = (id, text) => {
    return {
        type: 'MODIFY_ITEM',
        id: id,
        text: text
    }
};

const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id: id
    }
};

const restoreItem = (id) => {
    return {
        type: 'RESTORE_ITEM',
        id: id
    }
};

export {addItem, modifyItem, removeItem, restoreItem};