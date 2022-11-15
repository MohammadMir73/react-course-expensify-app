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

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 0 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: 2 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 8000, createdAt: 1 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//----

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(jsx);

