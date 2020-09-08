import React from "react";
import classes from "./Header.module.css"

const Header = (props) => {
    return(
        <div className={classes.Header}>
            {props.text}
            <div>
                {props.children}
            </div>
        </div>
    )
};

export default Header;