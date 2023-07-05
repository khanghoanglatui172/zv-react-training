export const jokeReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SUCCESS":
            return {...state, data: [...state.data, ...action.data]};
        case "ERROR":
            return {...state, error: action.data};
        default:
            return state;
    }
};