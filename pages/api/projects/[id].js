import { projects } from '../../../data'

const idPointer = ({ query: { id } }, res) => {
  const filtered = projects.filter((project) => project.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `The selected id: ${id} not found!` })
  }
}

export default idPointer
