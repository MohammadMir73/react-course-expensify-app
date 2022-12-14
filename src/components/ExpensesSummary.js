import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import getTotal from "../selectors/expenses-total";
import numeral from "numeral";
//----
const ExpensesSummary = ({number, total}) => {
    const expenseWord = number === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{number}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link to='/create' className="button">
                        Add Expense
                    </Link>
                </div>
            </div>
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

// <Link to='/help' >
//                 Help    
//             </Link>