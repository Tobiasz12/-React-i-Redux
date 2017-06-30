import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbsDown, removeComment, addComment} from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbsDown: (id) => dispatch(thumbsDown(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Comment);
