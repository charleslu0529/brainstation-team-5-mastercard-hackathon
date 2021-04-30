import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import AddCard from "./components/AddCard/AddCard";
import HomeScreen from "../src/components/HomeScreen/HomeScreen";
import React from "react";
import Dashboard from './components/Dashboard/Dashboard';
import cardsData from './data/cards.json';


class App extends React.Component {

    state = {
        cards:cardsData,
    }

    addNewCard = (event, props) => {
        event.preventDefault();
        console.log(event.target);
        let newCard = {
            "cardNumber": "513481649511",
            "cardImage": "/assets/images/5502013275323474-citi.svg",
            "accounts": [
                {
                    "website": "amazon.com",
                    "date": "Last used 2021.02.02",
                    "image": "/assets/images/amazon.svg"
                },
                {
                    "website": "heb.com",
                    "date": "Last used 2021.02.02",
                    "image": "/assets/images/heb.svg"
                },
                {
                    "website": "kroger.com",
                    "date": "Last used 2021.02.02",
                    "image": "/assets/images/kroger.svg"
                },
                {
                    "website": "walmart.com",
                    "date": "Last used 2021.02.02",
                    "image": "/assets/images/walmart.svg"
                },
                {
                    "website": "ilovetattoos.ai",
                    "date": "Last used 2021.02.02",
                    "image": "/assets/images/ilovetattoos.svg"
                }
            ]
        };
        this.setState({
            cards:[newCard, ...this.state.cards]
        })
        props.history.push("/cards");
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
                        render={(props) => <HomeScreen {...props} cards={this.state.cards}/>}
                    />
                    <Route
                        path="/cards/add"
                        exact
                        render={(props) => <AddCard {...props} handleSubmit={this.addNewCard} />}
                    />
                    <Route
                    path='/dashboard'
                    exact
                    render={(props)=><Dashboard {...props} accounts={this.state.cards[0].accounts}/>}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
