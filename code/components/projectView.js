import React from 'react'
import {formatString} from '../utils/stringUtils'


const ProjectView = ({title, description, anchor, lateralBar, backgroundImages}) => {
    const leftBarStyles = {
        backgroundColor: `${(lateralBar[0] === 'left' || lateralBar[0] === 'both')? `#${lateralBar[1]}` : 'none'}`
    }
    const rightBarStyles = {
        backgroundColor: `${(lateralBar[0] === 'right' || lateralBar[0] === 'both')? lateralBar[2] ? `#${lateralBar[2]}` : `#${lateralBar[1]}` : 'none'}`
    }
    return (
        <div className="project-view__wrapper">
            <div className="project-view__image-wrapper">
                <div
                    style={leftBarStyles}
                    className="project-view__lateral-bar project-view__lateral-bar__left"
                />
                <div
                    style={{backgroundImage: `url(${backgroundImages[0]})`}}
                    className="project-view__image-box">
                    <div className="project-view__opaque_background"/>
                    {backgroundImages[2] ?
                        <div
                            style={{backgroundImage: `url(${backgroundImages[2]})`}}
                            className={`project-view__phone-mock ${(backgroundImages[1] === 'left')? 'project-view__phone-mock__left': 'project-view__phone-mock__right'}`}
                        />
                        : null
                    }
                </div>
                <div
                    style={rightBarStyles}
                    className="project-view__lateral-bar project-view__lateral-bar__right"
                />
            </div>


            <div className="project-view__project-info">
                <h1 className="project-view__title">{
                    formatString(title).map((e) => e)
                }</h1>
                <p className="project-view__description">{
                    formatString(description).map((e) => e)
                }</p>
                <a href={anchor[1]} className="project-view__anchor">{anchor[0]}</a>
            </div>
        </div>
    )
}

export default ProjectView;