import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { logOut } from "../actions/isAuth"
//----
const Header = (props) => {
    const navigate = useNavigate();
    return (
        <header>
            <h1>
                Expensify
            </h1>
            <NavLink 
                to='/dashboard'  
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Dashboard
            </NavLink>
            <NavLink
                to='/create'
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Create Expense
            </NavLink>
            <NavLink 
                to='/help' 
                className={({ isActive }) => (isActive ? 'active' : '')}>
                Help
            </NavLink>
            <button onClick={() => {
                navigate('/');
                props.logOut();
            }}>Logout</button>
        </header>
    );
}
//----

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
});

export default connect(undefined ,mapDispatchToProps)(Header);
