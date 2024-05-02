import { GetJObsDetails } from "../services/api";

export const JobDataRequest = () => ({
    type: 'FETCH_JOB_DATA_REQUEST',
});

export const JobDataSuccess = (data) => ({
    type: 'FETCH_JOB_DATA_SUCCESS',
    payload: data,
});

export const JobDataFailure = (data) => ({
    type: 'FETCH_JOB_DATA_FAILURE',
    payload: data,
});

export const fetchJobsData = (limit, offset) => {
    return async (dispatch) => {
        try {
            let data_retries = 1;
            dispatch(JobDataSuccess({ jobs: [], counts: 0 }));
            while (data_retries < 4) {
                dispatch(JobDataRequest());
                await GetJObsDetails(limit, offset)
                    .then((response) => {
                        const jobsData = response.data.jdList;
                        const jobCounts = response.data.totalCount;
                        if (jobsData === null) {
                            dispatch(JobDataSuccess({ jobs: [], counts: 0 }));
                        } else {
                            dispatch(JobDataSuccess({ jobs: jobsData, counts: jobCounts }));
                        }
                        data_retries = 4;
                    }).catch((err) => {
                        data_retries++;
                    });
            }
        } catch (err) {
            dispatch(JobDataFailure(err));
        }
    };
};