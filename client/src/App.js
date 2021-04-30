import Logo from "./components/Logo/Logo";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import AddCard from "./components/AddCard/AddCard";
import HomeScreen from './components/HomeScreen';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Login} />
                <Route 
                  path="/cards" 
                  exact 
                  render={(props) => <HomeScreen {...props}/>}
                  />
                <Route
                    path="/cards/add"
                    exact
                    render={(props) => <AddCard {...props} />}
                />
                <Route
                    path='/dashboard'
                    exact
                    render={(props)=><Dashboard {...props}/>}
                />
            </Switch>
        </div>
    );
}

export default App;
