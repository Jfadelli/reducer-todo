import React from "react";
import Form from "./Form";

export default function List(props) {
    const toggleComplete = (clickId) => {
        props.dispatch({ type: "TOGGLE_COMPLETE", payload: clickId });
    };

    return (
        <div className="uk-width-medium uk-card uk-card-secondary uk-card-body uk-padding-small">
            <div data-uk-sortable="group: sortable-group">
                {props.tasks.map((task) => (
                    <div className="uk-margin-small" key={task.id}>
                        <div className="uk-card uk-card-default uk-card-body uk-padding-small">
                            <span className="uk-sortable-handle uk-margin-small-right" data-uk-icon="icon: table"></span>
                            <span
                                onClick={() => toggleComplete(task.id)}
                                className={`uk-text-truncate${task.completed ? ' completed' : ''}`}
                            >
                                {task.item}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Form tasks={props.tasks} dispatch={props.dispatch} />
        </div>
    );
}

