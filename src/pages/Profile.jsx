import { useLocation } from "react-router-dom"


const Profile = () => {
  const location = useLocation();
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-center">This is Profile component</h2>
      <p>Name: {location.state.name}</p>
      <p>Email: {location.state.email}</p>
      <p>City: {location.state.city}</p>
      <p>Country: {location.state.country}</p>
    </div>
  )
}

export default Profile
