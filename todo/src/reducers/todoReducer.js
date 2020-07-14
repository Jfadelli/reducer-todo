export const initialState = {
    todoItem: 'Poop',
    completed: false,
    id: ''
}

export const todoReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "ADD_TODO_ITEM_NAME":
            const newTodoItem = {
                ...action.payload,
                todoItem: action.payload,
                completed: false,
                id: Date.now()
            }
            return [
                ...state, newTodoItem
            ];
        case "TODO_ITEM_COMPLETED":
            return {
                ...state,
                completed: true
            }
        default:
            return state;
    }
}
