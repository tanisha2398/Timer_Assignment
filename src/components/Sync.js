import React, {useState, useEffect} from 'react'

export default function Sync() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(count => count + 1);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    return (
        <div >
        <h2>Task 1:</h2>
        <form>
            <input type="number" value={count} onChange={(event) => setCount(parseInt(event.target.value))}/>
        </form>
            <h2>Timer: {count}</h2>
        </div>
    );
}
