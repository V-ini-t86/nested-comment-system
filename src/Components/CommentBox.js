import React, { useState } from 'react';
import { createComment } from './data';
import { useDispatch } from 'react-redux';
import { replyNest } from '../redux/action/comment';
import ReplyIcon from '@material-ui/icons/Reply';
import classes from './CommentBox.module.css';

function CommentBox({ data, message }) {
  const [reply, setReply] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const hasChildren = children => children && children.length;
  const nestInput = e => {
    setInput(e.target.value);
  };
  function showInput() {
    setReply(true);
  }
  function hideInput() {
    setReply(false);
  }
  function nestedSubmitHandler(e) {
    e.preventDefault();
    if (input.toString() !== '') {
      const comment = new createComment(input);
      data.push(comment);
      dispatch(replyNest());
      setInput('');
    }
  }
  console.log(hasChildren(data));
  return (
    <div className={classes.Box}>
      <h4>{message}</h4>
      <form className={classes.form} onSubmit={nestedSubmitHandler}>
        {reply && <input type="text" onChange={nestInput} value={input} />}
        <button className={classes.reply} onClick={showInput}>
          <ReplyIcon fontSize="medium" />
        </button>
        {reply && <button onClick={hideInput}>cancel</button>}
      </form>
      <div className={classes.nest}>
        {hasChildren(data) ? (
          data.map(val => {
            return <CommentBox data={val.childs} message={val.comment} />;
          })
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}

export default CommentBox;
