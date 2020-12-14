import "./App.css";
import "./components/css/main.css";
import "./components/css/utils.css";
import { navigate, Router } from "@reach/router";
import { Dashboard } from "./components/views/Dashboard";
import { MainMenu } from "./components/views/MainMenu";
import { useEffect } from "react";
import { Login } from "./components/views/Login";
import { LandingPageRoot } from "./components/views/LandingPageRoot";
import { Root } from "./components/views/Root";
import { LandingPage } from "./components/views/LandingPage";

function App() {
    useEffect(() => {
        const activeUserId = sessionStorage.getItem("activeUserId");
        console.log(activeUserId);
        if (activeUserId === null) {
            console.log("going to login page");
            navigate("/landingPage");
        }
        try {
            console.log("looking for activeUserId");
        } catch {}
    }, []);
    return (
        <div className="App">
            <Router>
                <LandingPageRoot path="/landingPage">
                    <LandingPage path="/" />
                    <Login path="login" />
                </LandingPageRoot>
                <Root path="/">
                    <MainMenu path="mainMenu" />
                    <Dashboard path="dashboard/:kitchenId" />
                </Root>
            </Router>
        </div>
    );
}

export default App;
