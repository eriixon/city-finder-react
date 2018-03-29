const initialState = { cityList: [] };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CITY":
            return { ...state, cityList: [...state.cityList, ...action.newCities] };
        case "DEL_CITY":
            return { ...state, cityList: state.cityList.filter(c => c !== action.city) };
        default:
            return state;
    }
};

export default rootReducer;