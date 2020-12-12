import "./App.css";
import "./components/css/main.css";
import "./components/css/utils.css";
import { Router } from "@reach/router";
import { Dashboard } from "./components/views/Dashboard";
import { Navbar } from "./components/Navbar";
import { MainMenu } from "./components/views/MainMenu";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Dashboard path="/dashboard/:kitchenId" />
                <MainMenu path="/" />
            </Router>
        </div>
    );
}

export default App;
