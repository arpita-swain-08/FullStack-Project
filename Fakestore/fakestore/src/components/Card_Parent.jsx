import { useState } from "react"
import Card_child from "./Card_child"
import { Atom } from "react-loading-indicators";



const Card_Parent = () => {

    const [product, setProduct] = useState([])
    const [load, setLoad] = useState(false)

    const fetchPdata = async () => {
        try {
            setLoad(true)
            const fproduct = await fetch("https://fakestoreapi.com/products")
            const fdata = await fproduct.json()
            setTimeout(() => {
                setLoad(false)
                // console.log(fdata);
                setProduct(fdata)
            }, 1000)
        }
        catch (error) {
            console.log(error.message);
        }
    }
    const deleteUser = (id) => {
        const filterUsers = users.filter((ele) => ele.id !== id)
        setUsers(filterUsers)
    }


    return (
        <div className="main">
            <button onClick={fetchPdata}> fetch product</button>

            <div className="card-container">
                {load ? <div className="load"><Atom color="#32cd32" size="large" text="Loading........" textColor="#NaNNaNNaN" /></div> : product.map((user) => (

                    <Card_child product={user} deleteUser={deleteUser} />
                ))}
            </div>

        </div>
    )
}

export default Card_Parent