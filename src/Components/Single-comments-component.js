import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComments } from '../Redux/Action'; 

const SingleCommentsComponent = ({ input, id }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (input) {
      setComment(input);
    }
  }, [input]);

  const handleDelete = () => {
    dispatch(deleteComments(id));
  };

  return (
    <div className='comments-item'>
      <div className='comments-item-delete' onClick={handleDelete}>X</div>
      <input 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text" 
      />
      <input type="submit" hidden /> 
    </div>
  );
};

export default SingleCommentsComponent;
