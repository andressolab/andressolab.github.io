import React from 'react'
import PropTypes from 'prop-types';

const Header = ({title, buttons, buttonsHref}) => {

    return (
        <div className="header__wrapper">
            <h1 className="header__title">{title}</h1>
            <div className="header__buttons-wrapper">
                {}
                {buttons.map((btn, index) => {
                    return (
                        <a className="header__button" href={buttonsHref[index]}>{btn}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;