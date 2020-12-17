import React from 'react'
import { formatString } from '../utils/stringUtils'

const Footer = ({titles, descriptions, note}) => {

    return (
        // <>
    <div className="footer__wrapper">
        {titles.map((title, index) => {
            return (
                <>
                    <h1 className="footer__title">{
                        formatString(title).map((e) => e)
                    }</h1>
                    <p className={`footer__description ${(index === descriptions.length-1)? 'last' : ''}`}>{
                        formatString(descriptions[index]).map((e) => e)
                    }</p>
                </>
            )
        })}
        <p className="footer__note">{note}</p>
    </div>
    // </>
)
}

export default Footer;