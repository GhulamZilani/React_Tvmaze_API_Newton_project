import './Person.css';
import demoimg from '../images/demo.jpg'

const Person = ({person}) => {
    return (
        <div className="card">
            <div className="image-block">
                <img src={person?.image ? person.image?.original : demoimg } alt={person.name} />
            </div>
            <div className="footer">
                <h4>
                {person.name}
                </h4>
                <p><span style={{fontWeight: 'bold'}} >Country: </span> {person.country ? person.country?.name : '-'}</p>
            </div>
        </div>
    )
}

export default Person