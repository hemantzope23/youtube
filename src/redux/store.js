import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
} from "./reducers/video.reducer";
import { selectedVideoReducer } from "./reducers/video.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentsListReducer } from "./reducers/comments.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideos: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentsListReducer,
  relatedVideo: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
