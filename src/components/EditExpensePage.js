import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import ExpnseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
//----
const EditExpensePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expenseToEdit = props.expenses.find((expense) => expense.id === id )
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>
                        Edit <span>{expenseToEdit.description}</span> Expense
                    </h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpnseForm
                    fun = 'Edit'
                    expense={expenseToEdit}
                    onSubmit={(expense) => {
                        props.editExpense(id, expense);
                        navigate('/dashboard');
                    }}
                />
                <button className='button button--secondary' onClick={() => {
                    props.removeExpense(id)
                    navigate('/dashboard');
                }}>Remove</button>
            </div>
        </div>
    );
};
//----
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};
const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id })) 
});
//----
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);