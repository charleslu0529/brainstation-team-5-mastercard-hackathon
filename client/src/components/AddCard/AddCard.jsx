import React from "react";
import classes from "./add-card.module.scss";

function AddCard() {
    const nextPage = (event) => {
        console.log(event.target.parentNode);
    };

    return (
        <div className={classes.add}>
            <h1 className={classes.add__title}>Add Card</h1>
            <div className={classes.add__featured}></div>
            <form className={classes.add_form}>
                <div className={classes.add__page1}>
                    <label htmlFor="">Username or Access Card</label>
                    <input type="text" name="access" />
                    <label htmlFor="">Cardholder Name</label>
                    <input type="text" name="cardholderName" />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                    <button
                        className={classes.add__nextPage}
                        onClick={(event) => {
                            nextPage(event);
                        }}
                    >
                        Next
                    </button>
                </div>
                <div className={classes.page2}>
                    <input type="password" placeholder="xxxx-xxxx-xxxx" />
                    <button type="submit">Add Account</button>
                </div>
            </form>
        </div>
    );
}

export default AddCard;
