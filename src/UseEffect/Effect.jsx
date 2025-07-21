import { useEffect, useState } from "react";

function Effect() {

    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title =`Count ${count}`;
        console.log('useEffect ran:Updated title');
    },[count]);

  return (
    <div>
        <h1>Count is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Tap Me</button>
    </div>
  )
}

export default Effect
