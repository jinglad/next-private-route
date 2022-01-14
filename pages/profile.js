import withPrivateRoute from "../components/withPrivateRoute";

const profilePage = () => {
  return (
    <div>
      <h1>This is private route</h1>
    </div>
  )
}

export default withPrivateRoute(profilePage);