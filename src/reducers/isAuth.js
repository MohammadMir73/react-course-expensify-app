const isAuthReducerdefaultState = 1;

export default (state = isAuthReducerdefaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return 1;
        case 'LOG_OUT':
            return 0;
        default:
            return state;
    }
};