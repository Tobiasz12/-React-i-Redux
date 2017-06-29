import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import comments from './comments';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);
