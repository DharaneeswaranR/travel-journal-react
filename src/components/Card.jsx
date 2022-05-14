import locationIcon from '../assets/locationicon.svg'

function Card(props) {
    return (
        <div className='card'>
            <img className="card-img" src={props.imageUrl} />
            <div className="info">
                <div className="location">
                    <img className="loc-icon" src={locationIcon} alt="location icon" />
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card