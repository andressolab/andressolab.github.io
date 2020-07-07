import React from 'react'

const Header = ({title, buttons, buttonsHref}) => {
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
                        setNumber(number + 1);
                    }}
                >
                    test
                </button>
                {buttons.map((btn, index) => {
                    return (
                        <a
                            className="header__button"
                            href={buttonsHref[index]}
                        >
                            {btn}
                        </a>
                    )
                })}
            </div>
            <script src={"assets/js/header.js"}/>
        </div>
    )
}

export default Header;