import "/src/index.css"
const Card_child = ({product})=>{
    return(
        <div className="card">
            <div className="card-header">
                <img src={product.image} alt={product.title}/>
            </div>

            <div className="card-body">
                <h3>{product.title}</h3>
                <p><strong> product Id :</strong>  {product.id}</p>
                <p><strong> Title : </strong>  {product.title}</p>
                <p><strong> Price : </strong> {product.price}</p>
                {/* <p><strong> Description :</strong>  {product.description}</p> */}
                <p><strong> Category : </strong>  {product.category}</p>
                <p><strong> Rating : </strong> {product.rating?.count}</p>
                {/* <p>Count : {product.count?.rating}</p> */}


                <button onClick={()=>{deleteUser(User.id)}}>Delete</button>
            </div>
        </div>
    )
}

export default Card_child