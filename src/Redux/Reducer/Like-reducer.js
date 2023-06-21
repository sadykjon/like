import { INCREMENT, DECREMENT } from "../Type";

let initialState = {
    likes: 0
}

export const LikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                likes: state.likes + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                likes: state.likes - 1 >= 0 ? state.likes - 1 : 0
            }
        }
        default:
            return state;
    }
};
