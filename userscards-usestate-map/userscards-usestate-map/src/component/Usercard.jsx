import { FaGithub } from "react-icons/fa";

const Usercard = ({ user,deleteUser }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={user.avatar_url} alt={user.login} />
      </div>

      <div className="card-body">

        <h3>{user.login}</h3>
        <p>User ID: {user.id}</p>

        <a href={user.html_url} target="_blank" rel="noreferrer">
          <FaGithub className="icon" />
          View Profile
        </a>

        <button onClick={() => { deleteUser(user.id) }}> Delete</button>
      </div>
    </div>
  )
}

export default Usercard;
