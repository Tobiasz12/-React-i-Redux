import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbsDown, removeComment, addComment} from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))

});

export default connect(null, mapDispatchToProps)(Comment);
