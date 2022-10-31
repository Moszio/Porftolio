import Head from 'next/head'

export default function Home({ projects }) {
  console.log(projects)
  return (
    <div>
      <Head>
        <title>Andor Portfolio</title>
        <meta name='keywords' content='portfolio' />
      </Head>

      <h1>Welcome to next</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const request = await fetch('http://localhost:3000/api/projects')
  const projects = await request.json()

  return {
    props: {
      projects,
    },
  }
}
