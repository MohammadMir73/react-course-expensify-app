import React from 'react';
import { createRoot } from 'react-dom/client';
// Store Imorts
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import moment from 'moment';
// Style Imports
import 'normalize.css/normalize.css'
import './styles/styles.scss';
// Router Imports
import AppRouter from './Routers/AppRouters';

//----

const store = configureStore();

store.dispatch(addExpense({description: "Gas", amount: 1000, createdAt: moment().subtract(2, 'day')}));
store.dispatch(addExpense({description: "Rent", amount: 20000, createdAt: moment().startOf('month')}));
store.dispatch(addExpense({description: "Milk", amount: 220, createdAt: moment().startOf('day')}));
store.dispatch(addExpense({description: "Loan", amount: 33000, createdAt: moment().endOf('month')}))

//----

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(jsx);

