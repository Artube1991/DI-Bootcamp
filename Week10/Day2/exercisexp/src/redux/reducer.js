import { ADDING, TOGGLING, REMOVING } from "./actions";

const initialstate = {
    
};

export const todoReducer = (state = initialstate, action) => {
    console.log(action);

    switch (action.type) {
        case ADDING:
            return [...state, { id: Date.now(), text: action.text, status: "✔"}];
        case TOGGLING:
            return state.find(todo => todo.id = action.id)
        case REMOVING:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
}
}