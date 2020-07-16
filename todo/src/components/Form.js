import React from "react";
import { useForm } from "../hooks/useForm";

export default function Form(props) {
    const [item, setItem, handleChanges] = useForm("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.dispatch({ type: "ADD_TASK", payload: item });
        setItem("");
    };

    const clearCompleted = () => {
        props.dispatch({ type: "CLEAR_COMPLETED" });
    };

    return (
        <div className='uk-width-medium uk-margin'>
            <form onSubmit={handleSubmit}>
                <div class="uk-margin">
                    <input
                        className="uk-input"
                        id="item"
                        name="item"
                        placeholder="New Task"
                        value={item}
                        onChange={handleChanges}
                    />
                </div>
                <div className="">
                    <button
                        className="uk-button uk-button-default uk-width-1-1 uk-hidden"
                    >
                        Add Task
        </button>
                </div>
            </form>
            <button
                className="uk-button uk-button-default uk-width-1-1"
                onClick={clearCompleted}
            >
                Clear Completed
      </button>
        </div>
    );
}