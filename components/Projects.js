import React from 'react'
import porjectStyles from '../styles/Project.module.css'

const Projects = ({ project }) => {
  return (
    <div className={porjectStyles.container}>
      <p>{project.description}</p>
    </div>
  )
}

export default Projects
