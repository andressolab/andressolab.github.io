import React from 'react'

const formatString = (s) => {
    let re = /\*\*.+?\*\*/;
    const formattedString = [];

    s = s.replace(/\\n/g, '\n');
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

export {
    formatString
}