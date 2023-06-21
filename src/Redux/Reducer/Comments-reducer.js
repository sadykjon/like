import { ADD_COMMENTS, DELETE_COMMENTS } from "../Type";

const initialState = {
  comments: [],
  loading: false,
  error: null
};

export const CommentsReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_COMMENTS: {
      const { input, id } = action.payload;
      return {
        ...state,
        comments: [...state.comments, { input, id }]
      };
    }
    case DELETE_COMMENTS: {
      const { id } = action.payload;
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== id)
      };
    }
    default:
      return state;
  }
};
