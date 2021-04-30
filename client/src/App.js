import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import AddCard from "./components/AddCard/AddCard";
import HomeScreen from "../src/components/HomeScreen/HomeScreen";
import React from "react";
import Dashboard from './components/Dashboard/Dashboard'

class App extends React.Component {

    state = {
        cards:[],
        accounts:[],
    }

    addNewCard = (event) => {
        event.preventDefault();
        let newCard = {};
        this.setState({
            cards:[...this.state.cards, newCard]
        })
    }

    deleteAccount = (event) => {
        event.preventDefault();
        let newListOfAccounts = this.state.accounts;
        this.setState({
            accounts: newListOfAccounts,
        });
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route
                        path="/cards"
                        exact
                        render={(props) => <HomeScreen {...props} />}
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
}

export default App;
