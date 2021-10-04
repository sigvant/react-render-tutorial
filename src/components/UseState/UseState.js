import React, { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0)
    console.log(`useState render`)
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setCount(0)}>Count to zero</button>
            <button onClick={() => setCount(5)}>Count to Five</button>
            {/* calling setState is a way to flag component for re-rendering */}
        </div>
    )
}
