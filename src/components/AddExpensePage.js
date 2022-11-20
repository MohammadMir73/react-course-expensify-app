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
        <div className='page-header'>
            <div className='content-container'>
                <h1>Add Expense</h1>
            </div>
        </div>
        <div className='content-container'>
            <ExpnseForm
                fun = 'Add'
                onSubmit={(expense) => {
                    props.addExpense(expense);
                    navigate('/dashboard');
                }}
            />
        </div>
    </div>
)};
//----
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);