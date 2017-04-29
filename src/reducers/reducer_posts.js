import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

// server returns an array of posts butt we want to store each post in a object
// { 4: post, 6: post}

// lodash takes a object in a array and create a new object med selected property as a key.
