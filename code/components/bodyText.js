import React from 'react'
import { formatString } from '../utils/stringUtils'

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