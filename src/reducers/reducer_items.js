// State refers to an individual item
const itemActions = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {text: '', removed: false, id: action.id};

        case 'MODIFY_ITEM':
            if (state.id !== action.id) {
                return state;
            }
            return {...state, text: action.text};

        case 'REMOVE_ITEM':
        case 'RESTORE_ITEM':
            if (state.id !== action.id) {
                return state;
            }
            return {...state, removed: !state.removed};

        default:
            return state;
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                itemActions(undefined, action)
            ];

        case 'MODIFY_ITEM':
        case 'REMOVE_ITEM':
        case 'RESTORE_ITEM':
            return state.map(
                (item) => itemActions(item, action)
            );
    }
    return state;
}