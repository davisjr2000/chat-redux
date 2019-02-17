import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';

export default function(state, action) {
  switch (action.type) {
    default: {
      return []
    }
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
  }
}
