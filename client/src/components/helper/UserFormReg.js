import { navigate } from "@reach/router";
import Axios from "axios";
import React from "react";

export const UserFormReg = () => {
    const onRegister = (e) => {
        e.preventDefault();
        // console.log(e.target.f_name.value);
        // console.log(e.target.l_name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        // console.log(e.target.confirmPassword.value);
        Axios.post("http://localhost:8000/user/new", {
            f_name: e.target.f_name.value,
            l_name: e.target.l_name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
        }).then((resp) => {
            console.log(resp);
            if (resp.data.status === 500) {
                console.log(resp.data.msg);
            } else {
                navigate("/mainMenu");
            }
        });
    };
    return (
        <div className="register">
            <form onSubmit={onRegister}>
                <section>
                    <label htmlFor="f_name">First Name:</label>
                    <input type="text" name="f_name" id="f_name" />
                </section>
                <section>
                    <label htmlFor="l_name">Last Name:</label>
                    <input type="text" name="l_name" id="l_name" />
                </section>
                <section>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </section>
                <section>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </section>
                <section>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                </section>
                <button>Submit</button>
            </form>
        </div>
    );
};
