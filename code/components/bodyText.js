import React from 'react'

const formatString = (s) => {
    let re = /\*\*.+?\*\*/;
    const formattedString = [];
    let match = s.match(re);
    while(match) {
        if(match.index !== 0) {
            formattedString.push(s.slice(0, match.index));
            s = s.slice(match.index);
        }
        let matchedString = match[0];
        s = s.slice(matchedString.length);

        matchedString = matchedString.slice(2, matchedString.length-2);
        formattedString.push(<strong>{matchedString}</strong>);

        match = s.match(re);
    }
    formattedString.push(s);

    return formattedString;
}

const BodyText = ({title, subtitle, description}) => {
    return (
        <div className="body-text__wrapper">
            <h1 className="body-text__title">{
                formatString(title).map((e) => e)
            }</h1>
            <h2 className="body-text__subTitle">{
                formatString(subtitle).map((e) => e)
            }</h2>
            <p className="body-text__description">{
                formatString(description).map((e) => e)
            }</p>

            {/*<script src={"assets/js/header/body-text.js"}/>*/}
        </div>
    )
}

export default BodyText;