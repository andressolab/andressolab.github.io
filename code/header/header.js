import React from 'react'
import Contact from "./contact-side-panel";

const Header = ({title, buttons, buttonTypes, buttonHrefs, buttonIds}) => {
    return (
        <div className="header__wrapper">
            <h1
                id="header__title"
                className="header__title"
            >
                {title}
            </h1>
            <div className="header__buttons-wrapper">
                <button
                    id="header__button-test"
                    className="header__button"
                    onClick={() => {
                        alert('test');
                    }}
                >
                    test
                </button>
                {buttons.map((btn, index) => {
                    if (buttonHrefs[index]) {
                        return (
                            <a
                                id={buttonIds[index]}
                                className="header__button"
                            >
                                {btn}
                            </a>
                        )
                    } else {
                        return (
                            <button
                                id={buttonIds[index]}
                                className="header__button"
                                href={buttonHrefs[index]}
                            >
                                {btn}
                            </button>
                        )
                    }
                })}
            </div>
            {/*<Contact />*/}
            <script src={"assets/js/header/header.js"}/>
        </div>
    )
}

export default Header;