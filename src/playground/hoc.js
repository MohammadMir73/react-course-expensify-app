import React from "react";
import { createRoot } from 'react-dom/client';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Log in to view the info</p> }
        </div>
    )
};

// rquire

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<AdminInfo isAdmin={false} info='this are the details' />);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AuthInfo isAuthenticated={true} info='this are the details' />);