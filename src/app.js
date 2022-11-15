import React from 'react';
import { createRoot } from 'react-dom/client';
// Store Imorts
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'
// Style Imports
import 'normalize.css/normalize.css'
import './styles/styles.scss';
// Router Imports
import AppRouter from './Routers/AppRouters';

//----

const store = configureStore();


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


//----

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(jsx);

