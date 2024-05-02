const initialState = {
    experience: '',
    location: '',
    min_base_pay: 0,
    company_name: '',
    work_place: '',
    role: '',
}

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPERIENCE':
            return {
                ...state,
                experience: action.payload
            };

        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload
            };

        case 'SET_MIN_BASE_PAY':
            return {
                ...state,
                min_base_pay: action.payload
            };

        case 'SET_COMPANY_NAME':
            return {
                ...state,
                company_name: action.payload
            };

        case 'SET_WORK_PLACE':
            return {
                ...state,
                work_place: action.payload
            };

        case 'SET_ROLE':
            return {
                ...state,
                role: action.payload
            };

        default:
            return state;
    }
}

export default FilterReducer