import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
    /* Chapter 17 update - avoiding unnecessary renders */
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}></button>
        );
    }
};

export default MenuButton;
