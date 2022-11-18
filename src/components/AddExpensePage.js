import React from 'react';
import ExpnseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
//----
const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
    <div>
        <h1>Add Expense</h1>
        <ExpnseForm
            fun = 'Add'
            onSubmit={(expense) => {
                props.addExpense(expense);
                navigate('/dashboard');
            }}
        />
    </div>
)};
//----
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);