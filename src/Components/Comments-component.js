import React, { useState } from 'react';
import SingleCommentsComponent from './Single-comments-component';
import uniqid from 'uniqid';
import { addComments } from '../Redux/Action';
import { useSelector, useDispatch } from 'react-redux';

const CommentsComponent = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { comments } = useSelector(state => state.CommentsReducer)
  console.log("Comments", comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(addComments(input, id));
    setInput('');
  };

  return (
    <div className='card-comments'>
      <form onSubmit={handleSubmit} className='comments-item'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type='text' name='' id='' />
        <input type="submit" hidden />
      </form>
      {comments.map((elem) => {

        return <SingleCommentsComponent key={elem.id} {...elem} />
      })
      }
    </div>
  );
};

export default CommentsComponent;
