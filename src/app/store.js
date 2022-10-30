import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    postListReducer,
    postDetailsReducer,
    postCreateReducer
} from "../redux/reducers/post.reducer";
import { userLoginReducer } from "../redux/reducers/users.reducer";

const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    postCreate: postCreateReducer,
    userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;