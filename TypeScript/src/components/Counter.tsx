import { useState } from "react"

export function Counter(){
    const [Count,setCount] = useState<number>(0) 
    return(
        <div>
            <p>Cups ordered: {Count}</p>
            <button onClick={()=>{setCount( ( c ) => c + 1 ) }}>order one more</button>
        </div>
    )
}