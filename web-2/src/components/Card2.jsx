import "/src/index.css"
import obj from "/src/userData.js"
const Card2 = () => {
    return (
        <div className="container1">
            <img src={obj.image} alt="" className="card-img2" />

            <div className="info-cont">
                <h3>{obj.bio}</h3>
                <p><strong>Name:</strong> {obj.username}</p>
                <p><strong>Age:</strong> {obj.age}</p>
                <p><strong>Email:</strong> {obj.email}</p>
                <p><strong>Education:</strong> {obj.education}</p>
            </div>
        </div>

    )
}

export default Card2