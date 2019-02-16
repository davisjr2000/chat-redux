import { combineReducers } from 'redux';
import MessagesReducer from './messages_reducer';
import ChannelsReducer from './channels_reducer';
import SelectedChannelReducer from './selected_channel_reducer';

const rootReducer = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer
});

export default rootReducer;
