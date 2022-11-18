import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/isAuth"

const LoginPage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Plese Login!</p>
            <form onSubmit={(e) => {
                e.preventDefault;
                props.logIn();
                navigate('/dashboard');
            }}>
                <input type='text' />
                <br />
                <input type='text' />
                <br />
                <button>LogIn</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn()),
});

export default connect(undefined ,mapDispatchToProps)(LoginPage);