import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup Remove Expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup Edit Expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New note value'}
    });
});

test('Should setup Add Expense action object with data', () => {
    const expenseDate = {
        description : 'Rent',
        note : 'some note',
        amount : 100,
        createdAt : 20
    };
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    })
});

test('Should setup Add Expense action object without data', () => {
    const defultExpense = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defultExpense,
            id: expect.any(String)
        }
    });
});

