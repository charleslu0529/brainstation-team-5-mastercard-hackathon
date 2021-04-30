import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import AddCard from "./components/AddCard/AddCard";
<<<<<<< HEAD
import HomeScreen from '../src/components/HomeScreen/HomeScreen';
import Header from '../src/components/Header/Header';
=======
import HomeScreen from "./components/HomeScreen";
import React from "react";
>>>>>>> 8b269b553241f78d6fe38408df2b7e4610ccacee

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
                </Switch>
            </div>
        );
    }
}

export default App;
