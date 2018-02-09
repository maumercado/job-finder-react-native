import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import reducers from "../reducers";

const config = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["likedJobs"],
    version: 1
};

const reducer = persistReducer(config, reducers);

const logger = createLogger({
    duration: true,
    diff: true
});

const middleware = [thunk, logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

const store = createStore(reducer, {}, composedEnhancers);
const persistor = persistStore(store);

export default () => {
    return { persistor, store };
};
