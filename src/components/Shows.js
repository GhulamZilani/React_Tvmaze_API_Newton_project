import './Person.css';
import demoimg from '../images/demo.jpg'

const Shows = ({shows}) => {
    return (
        <div className="card">
            <div className="image-block">
                <img src={shows.image ? shows.image?.original : demoimg } alt={shows.name} />
            </div>
            <div className="footer">
                <h4>
                {shows.name}
                </h4>
                <p><span style={{fontWeight: 'bold'}} >Country: </span> {shows.network ? shows.network.country?.name : '-'}</p>
            </div>
        </div>
    )
}

export default Shows;