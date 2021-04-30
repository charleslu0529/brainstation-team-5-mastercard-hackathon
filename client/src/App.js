import Logo from "./components/Logo/Logo";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
            </header>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </div>
    );
}

export default App;
