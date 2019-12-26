import React, {useState, useEffect} from 'react'

export default function Delay() {
    const [count, setCount] = useState(1000);
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setValue(value => value + 1);
        }, count);
    
        return () => {
          clearInterval(interval);
        };
      }, [count]);
    return (
        <div style={{marginTop: "100px"}}>
            <h2>Task 2:</h2>
        <form>
            <input type="number" value={count} onChange={(event) => setCount(parseInt(event.target.value))}/>
        </form>
            <h2>Timer: {value}</h2>
        </div>
    );
}
