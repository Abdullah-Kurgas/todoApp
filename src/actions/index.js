export const changePage = (page) => {
    return {
        type: 'pageChanged',
        payload: page
    }
};

export const addTodo = (todo, index) => {
    return {
        type: 'add',
        payload: todo,
        index: index
    }
}
export const deleteTodo = (todo, index) => {
    return {
        type: 'delete',
        payload: todo,
        index: index
    }
}
export const changeTodo = (todo, index) => {
    return {
        type: 'change',
        payload: todo,
        index: index
    }
}