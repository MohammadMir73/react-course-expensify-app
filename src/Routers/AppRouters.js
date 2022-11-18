import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//----
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import { connect } from 'react-redux';
//----

const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            {!!props.isAuth && <Header/>}
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/dashboard' element={<ExpenseDashboardPage />} />
                <Route path='/create' element={<AddExpensePage />} />
                <Route path='/edit/:id' element={<EditExpensePage />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
)
//----

const mapStateToProps = (state) => ({
    isAuth: state.isAuth
});

export default connect(mapStateToProps)(AppRouter);