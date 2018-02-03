import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "../reducers";

const logger = createLogger({
    duration: true,
    diff: true
});

const middleware = [thunk, logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

const store = createStore(reducers, {}, composedEnhancers);

export default store;
