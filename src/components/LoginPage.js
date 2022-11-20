import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/isAuth"

const LoginPage = (props) => {
    const navigate = useNavigate();
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <h3>Time to get your expenses under control!</h3>
                <p>Plese Login!</p>
                <form onSubmit={(e) => {
                    e.preventDefault;
                    props.logIn();
                    navigate('/dashboard');
                }}>
                    <input type='text' placeholder="Username" className="login-input" />
                    <br />
                    <input type='password' placeholder="Password" className="login-input" />
                    <br />
                    <button className="button">LogIn</button>
                </form>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn()),
});
const mapStateToProps = (state) => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps ,mapDispatchToProps)(LoginPage);