import totalExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test('Should return 0 if no expense passed', () => {
    const result = totalExpenses();
    expect(result).toBe(0);
});

test('Should return correct total with one expense passed', () => {
    const result = totalExpenses([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('Should return correct total with multiple expenses passed', () => {
    const result = totalExpenses(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});