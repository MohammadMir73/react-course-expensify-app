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
            <ExpnseForm
                fun = 'Edit'
                expense={expenseToEdit}
                onSubmit={(expense) => {
                    props.editExpense(id, expense);
                    navigate('/dashboard');
                }}
            />
            <button onClick={() => {
                props.removeExpense(id)
                navigate('/dashboard');
            }}>Remove</button>
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