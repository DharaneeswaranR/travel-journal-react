import globeIcon from '../assets/globeicon.png'

function Navbar() {
    return (
        <nav>
            <img src={globeIcon} alt="icon of globe" />
            <h1>my travel journal</h1>
        </nav>
    )
}

export default Navbar