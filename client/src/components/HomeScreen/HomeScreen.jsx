import React from "react";
import "../HomeScreen/homeScreen.scss";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function HomeScreen(props) {
    let cards = props.cards.map((card) => {
        return (
            <Link to="/dashboard" className="homescreen__card-link">
                <img className="homescreen__card" src={card.cardImage}/>
            </Link>
        );
    });
    return (
        <section>
            <Header />
            <div className="homescreen">
                <h2 className="homescreen__sub-title">My Cards</h2>
                {cards}
                <Link className="homescreen__link" to="/cards/add">
                    <div className="homescreen__new-card">
                        <h3 className="homescreen__add-new-card-text">
                            Add New Card
                        </h3>
                    </div>
                </Link>
            </div>
        </section>
    );
}
