import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//----
const ExpenseDashboardPage = (props) => {
    const navigate = useNavigate();
    window.addEventListener('load',() => {
        if(!props.isAuth){
            navigate('/');
        }
    });
    return (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList /> 
    </div>
    );
}
//----

const mapStateToProps = (state) => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps)(ExpenseDashboardPage);