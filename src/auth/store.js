import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// sessionService will provide us with the tools, to store the details of the current user
import { sessionService } from "redux-react-session";

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

//The above line of code makes up the boiler plate for redux.

sessionService.initSessionService(store);

export default store;
//display oriented member and
