import { useState } from 'react';
import './style.css';


function Addition(){

    const [number1,setNumber1] = useState(0);
    const [number2,setNumber2] = useState(0);
    const [output,setOutput] = useState(number1 + number2);


    function handleMath(){
        setOutput(number1 + number2)

    }

    return(
        <div className='return'>
            {/* <form className='form'> */}
            <h1> DO MATH </h1>
                <input type="number" placeholder="0"id='first' value= {number1} onChange={e => setNumber1(+e.target.value)}/>
                <input type="number" placeholder='0' id='first' value = {number2} onChange={e => setNumber2(+e.target.value)}/>

            {/* </form> */}
            <button id="button" onClick={handleMath}> Add Them</button>

            <h2 id="text">Total : {output}</h2>

        </div>


    )
}
export default Addition;