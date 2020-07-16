import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer'

const TodoForm = () => {
    const [newTodoItem, setNewTodoItem] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)

    const handleChanges = e => {
        setNewTodoItem(e.target.value)
    };

    const addItem = (e, item) => {
        e.preventDefault();
        const newItem = {
            name: item,
            id: Date.now(),
            completed: false
        };
        this.setState({
            toDoItems: [...this.state.toDoItems, newItem]
        });
    };

    return (
        <form onSubmit={() => dispatch({ type: 'ADD_TODO_ITEM_NAME', payload: newTodoItem })}>
            <input
                type="text"
                value={state.newTodoItem}
                name="item"
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    );

}

export default TodoForm;
