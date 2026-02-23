import "/src/index.css"
import obj from "/src/userData.js"
const Card = ()=>{
        return(
            <div className="container">
                <img src={obj.image} alt="" className="card-img"/>    
                <h3 className="bio">{obj.bio}</h3>
                <p><strong>Name:</strong> {obj.username}</p>
                <p><strong>Age:</strong> {obj.age}</p>
                <p><strong>Email:</strong> {obj.email}</p>
                <p><strong>Education:</strong> {obj.education}</p>
            </div> 
        )
}

export default Card