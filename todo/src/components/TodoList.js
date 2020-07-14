import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = () => {
    const [newTodoItem, setNewTodoItem] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        setNewTodoItem(e.target.value);
        console.log(newTodoItem)
    };

    return (
        <div>
            {state.editing ? (
                <h1>
                    {state.title}{" "}
                    <i
                        className="far fa-edit"
                        onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
                    />
                </h1>
            ) : (
                    <div>
                        <input
                            className="title-input"
                            type="text"
                            name="newTodoItem"
                            value={newTodoItem}
                            onChange={handleChanges}
                        />
                        <button
                            onClick={() =>
                                dispatch({ type: "ADD_TODO_ITEM_NAME", payload: newTodoItem })
                            }
                        >
                            Update title
          </button>
                    </div>
                )}
        </div>
    );
};

export default TodoList;
