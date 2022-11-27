import './Maze.css';
import {useState} from 'react';
import Person from './Person';
import Shows from './Shows';


function Maze(){
    const [input,setInput]=useState('');
    const [result, setResult] = useState([]);
    const [inputData, setInputData ] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
     
    const radioHandler = (e) => {
        // e.preventDefault();
        setInput(e.target.value);
        setResult([]);
        setInputData('');
        setError(false)
        // console.log(input, result)
    }
    const changeHandler = async(e) => {
        e.preventDefault();
        if(input === '')
        {
            setError(true)
        }
        else{
            setInputData(e.target.value)
            setError(false);
            setIsLoading(true);
            if(inputData.length > 3)
            {
                const API = `https://api.tvmaze.com/search/${input}?q=${inputData}`
                const res = await fetch(API);
                const data = await res.json();
                const data2 =await data;
                setResult(data2);
                console.log(result)
            }
            else{
                setResult([]);
            }
            setIsLoading(false);
        }
    }
    console.log(input)

    return(
        <>
        <h1>TVmaze</h1>

        <h3>Search your favourite shows</h3>

        <form>
            <input type="radio" id="actor" onChange={(e) => radioHandler(e) } name='radio1' value="people"/>
            <label htmlFor="actor">Actor</label>
            <input type="radio" id="shows" onChange={(e) => radioHandler(e) } name='radio1' value="shows"/>
            <label htmlFor="shows">Shows</label>
            <br>
            </br>
            {  (input !== '') ? (input === 'shows') ? <p>Enter show below..</p> : <p>Enter Actor below..</p> : ''}
            <input autoComplete='off' value={inputData} onChange={(e) => changeHandler(e)} type="name" id='name'placeholder='eg:friends....'/>
        </form>
        {isLoading && <p>Loading...</p>}
        { error && 'Please select Actor or Shows to search.'}
        
        {(input === 'people') ? 
            <div className='box'>
            {(result.length !== 0) ? result.map((item,i) => (
                <Person key={i} person={item.person} />
            )): 'No Actor Found'}
            </div>
        : 
        <div className='box'>
            {(result.length !== 0) ? result.map((item,i) => (
                
                <Shows key={i} shows={item.show} />
            )): 'No Shows Found'}
            </div>
        }
        </>
    )
}
export default Maze;