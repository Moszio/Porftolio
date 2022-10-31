import React from 'react'
import Projects from '../components/Projects'
import { server } from '../config'

const project = () => {
  const fetchLocalApi = async () => {
    const request = await fetch(`${server}/api/projects`)
    const response = await request.json()
    console.log('response', response)
  }

  fetchLocalApi()

  return (
    <div>
      project
      <Projects />
    </div>
  )
}

export default project
