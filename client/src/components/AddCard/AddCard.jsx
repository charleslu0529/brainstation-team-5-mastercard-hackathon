import React from "react";
import classes from "./add-card.module.scss";
import cross from "../../assets/icons/cross.svg";
import { Link } from "react-router-dom";
export class AddCard extends React.Component {
    state = {
        page: 1,
        inputs: {
            access: null,
            cardholderName: null,
            password: null,
            cardNumber: null,
        },
    };

    nextPage = (event) => {
        event.preventDefault();
        this.setState({
            page: 2,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
    };

    render() {
        let show =
            this.state.page === 2 ? (
                <div className={classes.add__page2}>
                    <div className={classes.add__buttonRad}>
                        <label htmlFor="choice1">4531 5467 6546 1534</label>
                        <input
                            className={classes.add__radio}
                            id="choice1"
                            type="radio"
                            name="card"
                            value="4531546765461534"
                        />
                    </div>
                    <div className={classes.add__buttonRad}>
                        <label htmlFor="choice2">3214 7648 1237 5467</label>
                        <input
                            id="choice2"
                            className={classes.add__radio}
                            type="radio"
                            name="card"
                            value="3214764812375467"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`${classes.add__submit} ${classes.add__button}`}
                    >
                        Add Account
                    </button>
                </div>
            ) : (
                <>
                    <div className={classes.add__featured}></div>
                    <div className={classes.add__page1}>
                        <label htmlFor="">Username or Access Card</label>
                        <input type="text" name="access" />
                        <label htmlFor="">Cardholder Name</label>
                        <input type="text" name="cardholderName" />
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" />
                        <button
                            className={`${classes.add__nextPage} ${classes.add__button}`}
                            onClick={(event) => {
                                this.nextPage(event);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </>
            );

        return (
            <div className={classes.add}>
                <div className={classes.add__pageTitle}>
                    <h1 className={classes.add__title}>Add Card</h1>
                    <Link to="/cards" className={classes.add__return}>
                        <img src={cross} alt="" />
                    </Link>
                </div>
                <form
                    className={classes.add__form}
                    onSubmit={(event) => {
                        this.props.handleSubmit(event, this.props);
                    }}
                >
                    {show}
                </form>
            </div>
        );
    }
}

export default AddCard;
