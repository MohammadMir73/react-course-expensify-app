import moment from 'moment';
import filtersReducer from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'test'
    const action = { type: 'SET_TEXT_FILTER', text};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
    const action = { type: 'SET_START_DATE', startDate: 0};
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(0);
});

test('Should set endDate filter', () => {
    const action = { type: 'SET_END_DATE', endDate: 0};
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(0);
});