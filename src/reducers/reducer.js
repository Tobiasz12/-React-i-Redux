
import {combineReducers} from 'redux';
import comments from './comments';
import {users} from '../actions/users';

const reducer = combineReducers({
  comments,
  users
});


export default reducer;
