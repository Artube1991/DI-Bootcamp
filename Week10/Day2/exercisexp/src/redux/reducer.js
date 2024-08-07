import { ADDING, TOGGLING, REMOVING } from "./actions";

const initialstate = {
    
};

export const todoReducer = (state = initialstate, action) => {
    console.log(action);

    switch (action.type) {
        case ADDING:
            return [...state, { id: Date.now(), text: action.text, status: "active"}];
        case TOGGLING:
            const task = state.findIndex((todo) => todo.id === action.id)
            if (state[task].status === "not active") {
                state[task].status = "active"
            } else {state[task].status = "not active"}
            console.log([...state])
            return [...state]
        case REMOVING:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
}
}