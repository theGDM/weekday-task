//maintaing the initial states for jobData
const initialState = {
    loading: false,
    jobs: [],
    error: '',
    job_counts: 0,
}

const JobDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOB_DATA_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_JOB_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                jobs: [...state.jobs, ...action.payload.jobs],
                job_counts: action.payload.counts
            };

        case 'FETCH_JOB_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default JobDataReducer;