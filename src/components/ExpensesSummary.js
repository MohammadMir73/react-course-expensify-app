import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getTotal from "../selectors/expenses-total";
import numeral from "numeral";
//----
const ExpensesSummary = ({number, total}) => {
    const expenseWord = number === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div>
            <h3>
                Viewing {number} {expenseWord} totalling {formattedExpenseTotal}
            </h3>
        </div>
    );
};
//----
const mapStateToProps = (state) => ({
    number: selectExpenses(state.expenses, state.filters).length,
    total: getTotal(selectExpenses(state.expenses, state.filters))
});
//----
export default connect(mapStateToProps)(ExpensesSummary);