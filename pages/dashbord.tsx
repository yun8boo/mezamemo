import withAuth from '../utils/auth/wthAuth'

const DashBord = () => {
  return(
    <div>
      <h1>DashBord</h1>
    </div>
  )
}

export default withAuth(DashBord)