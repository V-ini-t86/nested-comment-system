export function addComment(comment) {
  return {
    type: 'addComment',
    comment
  };
}
export function replyNest() {
  return {
    type: 'REPLY_NESTED'
  };
}
