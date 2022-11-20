import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { logOut } from "../actions/isAuth"
//----
const Header = (props) => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <div className='content-container'>
                <div className='header__content'>
                    <Link className='header__title' to='/dashboard'  >
                        <h1>Expensify</h1>
                    </Link>
                    
                    <button className='button button--link' onClick={() => {
                        navigate('/');
                        props.logOut(); 
                    }}>Logout</button>
                </div>
            </div>
        </header>
    );
}
//----

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
});

export default connect(undefined ,mapDispatchToProps)(Header);

