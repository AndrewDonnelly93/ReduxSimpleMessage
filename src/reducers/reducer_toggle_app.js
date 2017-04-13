export default (state = false, action) => {
    switch (action.type) {
        case 'OPEN_APP':
        case 'CLOSE_APP':
            return !state;
    }
    return state;
}