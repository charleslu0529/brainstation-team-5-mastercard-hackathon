import React from "react";
import classes from "./filters.module.scss";
import cross from "../../assets/icons/cross.svg";
import { Link } from "react-router-dom";
function Filters(props) {
    return (
        <form className={classes.filter}>
            <div className={classes.filter__dark}>
                <div className={classes.filter__pageTitle}>
                    <h2 className={classes.filter__title}>
                        When do you want to be alerted?
                    </h2>
                    <Link>
                        <img src={cross} alt="return" />
                    </Link>
                </div>
                <p>We'll send you alerts based on the filters you set.</p>
                <h2 className={classes.filter__title}>Purchase Amount</h2>
                <p>Most fraud transactions are for under $2.00.</p>
                <p>Alert me for transactions under:</p>
                <div className={classes.filter__inputAmount}>
                    <label htmlFor="" className={classes.filter__label}>
                        Enter amount
                    </label>
                    <p className={classes.filter__currency}>$</p>
                    <input type="text" className={classes.filter__input} />
                </div>
                <p>Alert me for transactions over:</p>
                <p>Oter fraud transactions are over $1000.00</p>
                <div className={classes.filter__inputAmount}>
                    <label htmlFor="" className={classes.filter__label}>
                        Enter amount
                    </label>
                    <p className={classes.filter__currency}>$</p>
                    <input type="text" className={classes.filter__input} />
                </div>
            </div>
            <div className={classes.filter__time}>
                <h2 className={classes.filter__title}>Purchase Time</h2>
                <p>Most fraud transactions happens from 12pm to 12am</p>
                <p>Alert me for transactions between</p>
                <input
                    type="time"
                    name="startTime"
                    min="00:00"
                    max="23:59"
                    className={classes.filter__timeInput}
                />
                <input
                    type="time"
                    name="endTime"
                    min="00:00"
                    max="23:59"
                    className={classes.filter__timeInput}
                />
            </div>
            <div className={classes.filter__dark}>
                <h2 className={classes.filter__title}>Purchase Location</h2>
                <p>Alert me for transactions further than:</p>
                <label htmlFor="" className={classes.filter__label}>
                    Enter distance
                </label>
                <input type="text" />
            </div>
            <p className={classes.filter__reset}>Reset Filters</p>
            <Link>
                <button className={classes.filter__submit}>
                    Accept
                </button>
            </Link>
        </form>
    );
}

export default Filters;
