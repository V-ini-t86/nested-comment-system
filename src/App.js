import React from 'react';
import CommentSection from './Components/CommentSection';
import './style.css';

export default function App() {
  return (
    <div>
      <h1 className="head">Nested Comment System</h1>
      <div class="box">
        <CommentSection />
      </div>
    </div>
  );
}
