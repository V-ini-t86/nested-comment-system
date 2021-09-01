export default function allComments(state = [], action) {
  switch (action.type) {
    case 'addComment':
      let obj = action.comment;
      return [...state, obj];
    case 'REPLY_NESTED':
      console.log(state);
      return state;
    default:
      return state;
  }
}
