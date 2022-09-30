import React from 'react'

const USeEffect = () => {
  return (
    <div>
        Difference between useEffect and useContext ?
useEffect :
It allows us to implement all of the lifecycle hooks from within a single function API. // this will run when the component mounts and anytime the stateful data changes React.
{/* useEffect(() => { alert('Hey, Nads here!'); }); */}

// this will run, when the component is first initialized React.
{/* useEffect(() => { alert('Hey, Nads here!'); }, []); */}

// this will run only when count state changes React.
{/* useEffect(() => { fetch('nads').then(() => setLoaded(true)); }, [count]); */}

// this will run when the component is destroyed or before the component is removed from UI.
 {/* React.useEffect(() => { alert('Hey, Nads here'); return () => alert('Goodbye Component'); }); */}

useContext :
This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props. It basically removes prop-drilling 
{/* const ans = { right: '✅', wrong: '❌' } */}

  const AnsContext = createContext(ans);

  {/* function Exam(props) {
      return (
          // Any child component inside this component can access the value which is sent.
          <AnsContext.Provider value={ans.right}>
              <RightAns />
          </AnsContext.Provider>
      )
  } */}

  function RightAns() {
      // it consumes value from the nearest parent provider.
      {/* const ans = React.useContext(AnsContext);
      return <p>{ans}</p> */}
      // previously we were required to wrap up inside the AnsContext.Consumer
      // but this useContext hook, get rids that.
  }
    </div>
  )
}

export default USeEffect