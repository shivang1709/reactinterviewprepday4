import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const UseRef = () => {
    const [input, setInput] = useState("");
    const count = useRef(0);


    useEffect(() => {
        count.current = count.current + 1;

    })


    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            <h1>Render Count : {count.current}</h1>
            {/* 
            The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.
             It can be used to access a DOM element directly. */}
        </div>
    )
}

export default UseRef