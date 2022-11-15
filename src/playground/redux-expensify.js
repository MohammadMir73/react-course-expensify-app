import { createStore, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
// ADD_EXPENSE

const addExpense = ({
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// REMOVE_EXPENSE_BY_ID

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Expenses Reducer

const expensesReduserdefaultState = [];

const expensesReduser = (state = expensesReduserdefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};
// Set Text

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});


// Sort By Amount

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Sort By  Date

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Set Start Date

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// Set End Date

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Filter Reducer

const filtersReduserdefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReduser = (state = filtersReduserdefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                  ...state,
                 sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
             return {
                ...state,
                 endDate: action.endDate
            }
        default:
            return state;
    }
};

// Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy ==='date') {
            return a.createdAt - b.createdAt
        }
        if (sortBy ==='amount') {
            return a.amount - b.amount
        }
    })
};

// Store Configuration

const store = configureStore({
    reducer: {
        expenses: expensesReduser,
        filters: filtersReduser
    }
});


// 

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: 10000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 200, createdAt: 500 }));
const expenseThree = store.dispatch(addExpense({ description: 'Pizza', amount: 800, createdAt: 20000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300}))
store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Iced Cofee', amount: 300}))

// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(700));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(12500));

const demoState = {
    expenses: [{
        id: 'asdfsafa',
        description: 'January Rent',
        note: 'Final month',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}