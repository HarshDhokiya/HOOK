//useState Hook

import { useState } from "react";

function State() {

    let [count, setCount] = useState(45);

    // let [count, setCount] = useState(45)
    const increment = () => {
        setCount(count + 1)
        console.log(count)
    };
    const decrement = () => { 
        setCount(count - 1);
        console.log(count)
    }
    const Reset = () => {
        setCount(0);
        
    }

    return (
        <div>

            <h1>{count}</h1>
            <button onClick={increment}>Tap Me</button>
            <button onClick={Reset} >Reset</button>
            <button onClick={decrement}>Tap Mee</button>

        </div>

    );

}

export default State