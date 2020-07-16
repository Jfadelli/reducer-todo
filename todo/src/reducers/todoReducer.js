export const initialTasks = [
    {
        item: "Learn about reducers",
        completed: false,
        id: Date.now(),
    },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                },
            ];
        case "TOGGLE_COMPLETE":
            return state.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                } else {
                    return task;
                }
            });
        case "CLEAR_COMPLETED":
            return state.filter((task) => !task.completed);
        default:
            return state;
    }
};

