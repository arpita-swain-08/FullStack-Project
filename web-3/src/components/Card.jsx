import "/src/index.css"


const Card = ({ user }) => {
    return (
            <div className={`card ${user.age > 30 ? "green" : "golden"}`}>
                <div className="card-top">
                    <img src={user.profileImg} alt="" />
                </div>


                <div className="card-body">
                    <h2><strong>Name: </strong>{user.username}</h2>
                    <p><strong>Designation: </strong>{user.designation}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>Gender: </strong>{user.gender}</p>
                    <p><strong>Age: </strong>{user.age}</p>
                </div>
            </div>
         
    )
}

export default Card