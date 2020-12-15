import React from 'react'

const Header = ({title, buttons, buttonHrefs, languages}) => {
    return (
        <>
            <div className="header__box"/>
            <div className="header__wrapper">
                <h1
                    // id="header__title"
                    className="header__title"
                >
                    {title}
                </h1>
                <div className="header__buttons-wrapper">
                    {/*<button*/}
                    {/*    // id="header__button-test"*/}
                    {/*    className="header__button"*/}
                    {/*    onClick={() => {*/}
                    {/*        alert('test');*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    test*/}
                    {/*</button>*/}
                    {buttons.map((btn, index) => {
                        return (<a
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
                            id={`header__languages__${btn}`}
                            className="header__language"
                        >
                            {btn}
                        </button>)
                    })}
                </div>
                <script src={"assets/js/header/header.js"}/>
            </div>
        </>

    )
}

export default Header;