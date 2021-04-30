import Logo from "./components/Logo/Logo";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import AddCard from "./components/AddCard/AddCard";
import HomeScreen from './components/HomeScreen';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
            </header>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cards" exact component={HomeScreen} />
                <Route
                    path="/cards/add"
                    exact
                    render={(props) => <AddCard {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
