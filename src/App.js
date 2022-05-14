import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
    return (
        <div id="main">
            <Navbar/>
            <div className="cards-container">
                {data.map(info => 
                    <Card
                        {...info}
                    />
                )}
            </div>
        </div>
    )
}

export default App
