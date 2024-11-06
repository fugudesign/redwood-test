// import { Link, routes } from '@redwoodjs/router'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <Link to={routes.dashboard()}>Dashboard</Link>`
    </>
  )
}

export default HomePage
