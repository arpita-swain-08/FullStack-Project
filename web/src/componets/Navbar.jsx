import "./All.css"
const Navbar = ()=>{
    return(
        <nav className="nav">
            <div className="logo">Starbucks</div>
            <ul className="nav-items">
                <li>Home</li>
                <li>Menu</li>
                <li>Rewards</li>
            </ul>
                <button className="btn">Contact</button>
        </nav>
    )
}

export default Navbar