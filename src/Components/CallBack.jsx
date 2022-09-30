// import React from 'react'
// import { useCallback } from 'react';
// import { useState } from 'react'

// const CallBack = () => {
//     const [val,setVal]= useState(0);
//     const [item,setItem]=useState();
    
//     const memoHook = useMemo(function countMemo(){
//         return val+5;
//     },[item]);


//     const callbackHook =useCallback(function countMemo(){
//         return val;
//     },[val])
    
    
    
    
//     return (
//     <>
//         <h1>Difference between callback and useCallback Hook ?</h1>
//          <h1>UseMemo Hook</h1>
//          <h2>Value: {val}</h2>
//          <h2>Items: {item} </h2>
//          <h3>{memoHook}</h3>
//          <h3>{callbackHook}</h3>
//          <button onClick={()=>setVal(val+1)}>Click Me</button>
//          <button onClick={()=>setItem(item*2)}>Click Me</button>
//         <li>The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed</li>

//         <li>callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.</li>
//     </>
//   )
// }

// export default CallBack