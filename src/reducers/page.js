const pageReducer = (state = 'pending', action) => {
    switch (action.type) {
        case 'pageChanged':
            return state = action.payload;
        default:
            return state;
    }
}

export default pageReducer;