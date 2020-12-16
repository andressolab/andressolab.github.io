import React from 'react'

const BurgerMenu = ({buttons, buttonHrefs, languages}) => {
    return (
        <div className="burger-menu__wrapper">
            <button id="burger-menu__btn" className="burger-menu__btn">
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H23V2.66667H0V0ZM0 6.66667H23V9.33333H0V6.66667ZM0 13.3333H23V16H0V13.3333Z"
                          fill="black"/>
                </svg>
            </button>

            <div id="burger-menu__menu-wrapper" className="burger-menu__menu-wrapper">
                <button id="burger-menu__close-btn" className="burger-menu__close-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z"
                            fill="white"/>
                    </svg>
                </button>
                <svg className="burger-menu__title" width="65" height="24" viewBox="0 0 65 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.5061 23.0672H17.5949V20.5863C16.135 22.395 13.9544 23.647 10.8729 23.647C4.68227 23.6447 0 18.5697 0 11.8223C0 5.07728 4.68227 0 10.8729 0C13.9567 0 16.1119 1.25199 17.5949 3.08379V0.602898H23.5061V23.0672ZM6.19067 11.8223C6.19067 15.2526 8.43826 18.013 11.9863 18.013C15.4397 18.013 17.782 15.3704 17.782 11.8223C17.782 8.27656 15.4397 5.63166 11.9863 5.63166C8.43826 5.63397 6.19067 8.39206 6.19067 11.8223Z"
                        fill="white"/>
                    <path
                        d="M51.0915 8.76396V23.0672H45.0417V10.7113C45.0417 7.46577 43.4201 5.68017 40.6597 5.68017C38.0633 5.68017 35.9082 7.37337 35.9082 10.7574V23.0672H29.8584V0.602898H35.7465V3.24548C37.345 0.856992 39.8027 0 42.3529 0C47.451 0 51.0915 3.54578 51.0915 8.76396Z"
                        fill="white"/>
                    <path
                        d="M65 19.1241C65 21.5588 62.9142 23.6447 60.5257 23.6447C58.1141 23.6447 56.0051 21.5588 56.0051 19.1241C56.0051 16.7125 58.1141 14.6497 60.5257 14.6497C62.9142 14.6521 65 16.7148 65 19.1241Z"
                        fill="white"/>
                </svg>
                <div className="burger-menu__buttons-wrapper">
                    {buttons.map((btn, index) => {
                        return (<a
                            key={`burger-menu__button${index}`}
                            id={`burger-menu__button${index}`}
                            className="burger-menu__button"
                            href={buttonHrefs[index]}
                        >
                            {btn}
                        </a>)

                    })}
                </div>
                <div className="burger-menu__footer">
                    {languages.map((btn, index) => {
                        return (<div className="burger-menu__footer-section" key={index}>
                            {index !== 0? <div className="burger-menu__section-division" key={`burger-menu__section-division${index}`}/> : null}
                            <button
                                key={`burger-menu__languages__${btn}`}
                                id={`burger-menu__languages__${btn}`}
                                className="burger-menu__language"
                            >
                                {btn}
                            </button>
                        </div>)
                    })}
                </div>
            </div>
            <script src={"assets/js/header/burger_menu.js"}/>
        </div>
    )
}

export default BurgerMenu;