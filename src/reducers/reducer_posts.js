import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, CREATE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

// server returns an array of posts butt we want to store each post in a object
// { 4: post, 6: post}

// lodash takes a object in a array and create a new object med selected property as a key.


// fetch post es5 way
/*
const post = action.payload.data;
const newState = { ...state };
newState[post.id] = post;
return newState;
*/
