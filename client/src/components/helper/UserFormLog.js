import { navigate } from "@reach/router";
import Axios from "axios";
import React from "react";

export const UserFormLog = () => {
    const onLogin = (e) => {
        e.preventDefault();
        Axios.patch("http://localhost:8000/user/login", {
            email: e.target.email.value,
            password: e.target.password.value,
        })
            .then((resp) => {
                if (resp.status === 200) {
                    sessionStorage.setItem("activeUserId", resp.data.data._id);
                    navigate("/mainMenu");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login">
            <form onSubmit={onLogin}>
                <section>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" />
                </section>
                <section>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </section>
                <button>Submit</button>
            </form>
        </div>
    );
};
