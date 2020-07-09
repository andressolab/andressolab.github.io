import React from 'react'

const Main = ({ titles, projectLeft, projectCenter, projectRight, _relativeURL, _ID }) => {
  const projects = [ projectLeft, projectCenter, projectRight ];

    return (
      <>
        <div className="main__titles">{titles.map((title) => <p dangerouslySetInnerHTML={{__html: title}}/>)}</div>
        <div className="main__project-container">
          {projects.map((project) => (
            <div className="main__project" style={{backgroundImage: `url('${_relativeURL( project[2], _ID )}')`}}>
              <a className="main__project--link" href={project[1]}>{project[0]}</a>
              <div />
            </div>
          ))}
        </div>
      </>
    )
}

export default Main;