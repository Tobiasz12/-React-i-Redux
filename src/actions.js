import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbsUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbsDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id,text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export default addComment;
