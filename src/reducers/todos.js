const todoReducer = (state = [], action) => {
    let changedState = [...state];
    let changedTodo = { ...action.payload };
    switch (action.type) {
        case 'add':
            changedState.push(action.payload);
            return changedState;

        case 'delete':
            if (action.payload) changedState.splice(action.index, 1);
            else changedState = [];
            return state = changedState;

        case 'change':
            changedTodo.done = !changedTodo.done;
            changedState[action.index] = changedTodo;
            return state = changedState;
        default:
            return state;
    }
}

export default todoReducer;