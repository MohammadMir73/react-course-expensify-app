import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expense</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            )
        }
        <h1>Expense List</h1>
        
    </div>
);
//----
const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});
//----
export default connect(mapStateToProps)(ExpenseList);

