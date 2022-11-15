import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import expensesReducer from '../reducers/expenses';
import filtersReduser from '../reducers/filters';


//Store Configuration

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

export default () => {
    const store = configureStore({
        reducer: {
            expenses: expensesReducer,
            filters: filtersReduser
        },
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    return store;
};



