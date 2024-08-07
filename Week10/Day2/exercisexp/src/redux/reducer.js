import { ADDING, TOGGLING, REMOVING } from "./actions";

const initialstate = [];

export const todoReducer = (state = initialstate, action) => {
    console.log(action);

    switch (action.type) {
        case ADDING:
            return [...state,
                { id: Date.now(), text: action.text, status: "active"}
            ];
        case TOGGLING:
            const newState = [...state];
            const task = newState.findIndex((todo) => todo.id === action.id);
            const todo = { ...state[task] };
      
            if (todo.status === "not active") {
              todo.status = "active";
            } else {
              todo.status = "not active";
            }
      
            newState[task] = todo;
            return newState;
        case REMOVING:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
}
}