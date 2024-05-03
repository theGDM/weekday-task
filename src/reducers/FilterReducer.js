//maintaining the initial state for filters data
const initialState = {
    experience: '',
    location: '',
    min_base_pay: '',
    company_name: '',
    work_place: '',
    tech_stack: '',
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

        case 'SET_TECH_STACK':
            return {
                ...state,
                tech_stack: action.payload
            };

        default:
            return state;
    }
}

export default FilterReducer