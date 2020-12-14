import React from "react";
import { UserFormLog } from "../helper/UserFormLog";
import { UserFormReg } from "../helper/UserFormReg";

export const Login = () => {
    return (
        <div className="container row justify-evenly">
            <div className="login">
                <h1>Login</h1>
                <UserFormLog />
            </div>
            <div className="register">
                <h1>Register</h1>
                <UserFormReg />
            </div>
        </div>
    );
};
