import { projects } from '../../../data'

const handler = (req, res) => {
  res.status(200).json(projects)
}

export default handler
