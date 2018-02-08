import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from "./types";

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const JOB_QUERY_PARAMS = {
    publisher: "4201738803816157",
    format: "json",
    v: "2",
    latlong: 1,
    radius: 10,
    q: "javascript" // query hardcoded...
};

const buildJobsUrl = zip => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = region => async dispatch => {
    try {
        const zip = await reverseGeocode(region);
        const url = buildJobsUrl(zip);
        const { data } = await axios.get(url);
        dispatch({ type: FETCH_JOBS, payload: data });
    } catch (err) {
        console.error(err);
    }
};

export const likeJob = job => {
    return {
        payload: job,
        type: LIKE_JOB
    };
};

export const clearLikedJobs = () => {
    return { type: CLEAR_LIKED_JOBS };
};
