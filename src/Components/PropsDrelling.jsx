import React from 'react'

const PropsDrelling = () => {
  return (
    <div>
  <h1>  Prop Drilling :</h1>
It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.

<h2>State Uplifting:</h2>
When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.
</div>
  )
}

export default PropsDrelling