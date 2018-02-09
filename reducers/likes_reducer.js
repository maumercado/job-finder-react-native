import { PERSIST_REHYDRATE } from "redux-persist/lib/constants";
import { LIKE_JOB, CLEAR_LIKED_JOBS } from "../actions/types";
import uniqBy from "lodash/uniqBy";

export default (state = [], action) => {
    switch (action.type) {
        case PERSIST_REHYDRATE: {
            return action.payload.likedJobs || [];
        }
        case LIKE_JOB: {
            return uniqBy([action.payload, ...state], "jobkey");
        }
        case CLEAR_LIKED_JOBS: {
            return [];
        }
        default: {
            return state;
        }
    }
};
