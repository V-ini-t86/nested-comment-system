import React, { useState } from 'react';
import classes from './MainForm.module.css';
import { createComment } from './data';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/action/comment';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
function MainForm() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const addCommentHandler = e => {
    e.preventDefault();
    const comment = new createComment(input);
    dispatch(addComment(comment));
    setInput('');
  };
  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <form className={classes.form} onSubmit={addCommentHandler}>
      <TextField
        id="input-with-icon-textfield"
        label="John Doe"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          )
        }}
        onChange={inputHandler}
        value={input}
        variant="standard"
      />

      <Button variant="contained">comment</Button>
    </form>
  );
}

export default MainForm;
