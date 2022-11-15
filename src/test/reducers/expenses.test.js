import expensesReduser from "../../reducers/expenses";
import expenses from "../fixtures/expenses"


test('Should set default state', () => {
    const state = expensesReduser(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReduser(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReduser(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: expect.any(String),
        description: 'Bill',
        note: '',
        amount: '20000',
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense 
    };
    const state = expensesReduser(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
    const updates = {
        description: 'bill'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    }
    const state = expensesReduser(expenses, action);
    expect(state[1].description).toBe('bill');
});

test('Should NOT edit an expense if id not found', () => {
    const updates = {
        description: 'bill'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReduser(expenses, action);
    expect(state).toEqual(expenses);
});