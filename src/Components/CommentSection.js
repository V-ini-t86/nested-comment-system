import React, { useState } from 'react';
import MainForm from './MainForm';
import CommentBox from './CommentBox';
import { useSelector } from 'react-redux';
import classes from './CommentSection.module.css';
function CommentSection() {
  const commentData = useSelector(state => state.allComments);
  const hasChildren = children => children && children.length;
  console.log(hasChildren);
  const childs = commentData.childs;

  return (
    <div className={classes.main}>
      <MainForm />
      {hasChildren(commentData) &&
        commentData.map(val => {
          return <CommentBox data={val.childs} message={val.comment} />;
        })}
    </div>
  );
}

export default CommentSection;
