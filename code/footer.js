import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({buttons, buttonsHref}) => {

    return (
        <>
            <div className="footer__top-spacer"/>
            <div className="footer__wrapper">
                <div className="footer__buttons-wrapper">
                    {}
                    {buttons.map((btn, index) => {
                        return (
                            <a className="footer__button" href={buttonsHref[index]}>{btn}</a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Footer;