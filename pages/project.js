import React from 'react'
import Projects from '../components/Projects'

const project = ({ projects }) => {
  console.log('projects', projects)

  return (
    <div>
      {projects.map((project) => {
        return <Projects key={project.id} project={project} />
      })}
    </div>
  )
}

export default project

export const getStaticProps = async () => {
  const request = await fetch('http://localhost:3000/api/projects')
  const projects = await request.json()

  return {
    props: {
      projects,
    },
  }
}
