import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    default: {
      return  [
          {
            "author":"anonymous92",
            "content":"Hello world!",
            "created_at":"2017-09-26T23:03:16.365Z"
          },
          {
            "author":"anonymous77",
            "content":"My name is anonymous77",
            "created_at":"2017-09-26T23:03:21.194Z"
          }];
    }
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
  }
}
