// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const DashboardPage = () => {
  const { logOut } = useAuth()

  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardPage/DashboardPage.tsx</code>
      </p>
      <button onClick={() => logOut()}>Logout</button>
    </>
  )
}

export default DashboardPage
