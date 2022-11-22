import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className="Home">
      </div>
      <Link to={"/login"} className="disconnect-button">Déconnexion</Link>
    </>
  )
}

export default Home