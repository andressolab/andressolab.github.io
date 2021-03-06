import React from 'react'
import BurgerMenu from "./burger_menu";

const Header = ({buttons, buttonHrefs, languages}) => {
    return (
        <>
            <div className="header__box"/>
            <div className="header__wrapper">
                <svg className="header__title" width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5061 23.0672H17.5949V20.5863C16.135 22.395 13.9544 23.647 10.8729 23.647C4.68227 23.6447 0 18.5697 0 11.8223C0 5.07728 4.68227 0 10.8729 0C13.9567 0 16.1119 1.25199 17.5949 3.08379V0.602898H23.5061V23.0672ZM6.19067 11.8223C6.19067 15.2526 8.43826 18.013 11.9863 18.013C15.4397 18.013 17.782 15.3704 17.782 11.8223C17.782 8.27656 15.4397 5.63166 11.9863 5.63166C8.43826 5.63397 6.19067 8.39206 6.19067 11.8223Z" fill="#1C1235"/><path d="M51.0915 8.76396V23.0672H45.0417V10.7113C45.0417 7.46577 43.4201 5.68017 40.6597 5.68017C38.0633 5.68017 35.9082 7.37337 35.9082 10.7574V23.0672H29.8584V0.602898H35.7465V3.24548C37.345 0.856992 39.8027 0 42.3529 0C47.451 0 51.0915 3.54578 51.0915 8.76396Z" fill="#1C1235"/><path d="M65 19.1241C65 21.5588 62.9142 23.6447 60.5257 23.6447C58.1141 23.6447 56.0051 21.5588 56.0051 19.1241C56.0051 16.7125 58.1141 14.6497 60.5257 14.6497C62.9142 14.6521 65 16.7148 65 19.1241Z" fill="#1C1235"/></svg>
                <div className="header__buttons-wrapper">
                    {buttons.map((btn, index) => {
                        return (<a
                            key={`header__button${index}`}
                            id={`header__button${index}`}
                            className="header__button"
                            href={buttonHrefs[index]}
                        >
                            {btn}
                        </a>)

                    })}
                    <div className="header__section-division"/>
                    {languages.map((btn, index) => {
                        return (<button
                            key={`header__languages__${btn}`}
                            id={`header__languages__${btn}`}
                            className="header__language"
                        >
                            {btn}
                        </button>)
                    })}
                </div>
                <BurgerMenu
                    buttons={buttons}
                    buttonHrefs={buttonHrefs}
                    languages={languages}
                />
                <script src={"assets/js/header/header.js"}/>
            </div>
        </>

    )
}

export default Header;