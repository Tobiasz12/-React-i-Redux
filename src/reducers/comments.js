import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT,THUMB_DOWN_COMMENT} from '../actions/actions'

 function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
            case THUMB_UP_COMMENT:
                return state.map(comment => {
                    if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                    }
                return comment;
                });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                comment.id === action.id ? comment.votes - 1 : comment;
                return comment;
            })
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
            return state.map(comment=> {
                comment.id === action.id ? comment.text = action.text : comment
                return comment;
            })
        default:
            return state;
    }
}
export default comments;
