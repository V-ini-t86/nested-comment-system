export function createComment(value) {
  this.comment = value.toString();
  this.id = Date.now();
  this.childs = [];
}
