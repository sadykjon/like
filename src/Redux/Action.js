import { INCREMENT,DECREMENT,ADD_COMMENTS, DELETE_COMMENTS } from "./Type";





export const increment =()=>{
    return{
        type:INCREMENT,
    }
}
export const decrement =()=>{
    return{
        type:DECREMENT,
    }
}

//comments action

export const addComments = (input, id) => {
    return {
      type: ADD_COMMENTS,
      payload: { input, id },
    };
  };
  
  export const deleteComments = (id) => {
    return {
      type: DELETE_COMMENTS,
      payload: { id },
    };
  };