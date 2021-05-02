import {useState} from 'react'


const Counter = () => {
  
  const[number, setNumber] = useState(0)
  const increaseOne = ()
 => {
 setNumber(number + 1)} 
  
  const decreaseOne = ()
 => {
 setNumber(number - 1)}  
  
  const reset = ()
 => {
 setNumber(0)}  
  return (
    <div class="container>
     <h2>{number}</h2> 
     <button type="button" className="btn" onClick={increaseOne}>Increase One </button>
     <button type="button" className="btn" onClick={decreaseOne}>Decrease One </button>
      <button type="button" className="btn" onClick={reset}> Reset </button>
    
    </div>
  
}

export default Counter
