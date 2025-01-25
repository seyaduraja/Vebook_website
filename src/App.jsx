import React from "react"

const Animate = React.lazy(() => import('./components/Animation'))
const Header = React.lazy(() => import('./components/Header'))
const Card = React.lazy(() => import('./components/card'))
const Info = React.lazy(() => import('./components/Detail'))

function App() {

  return (
    <>
     
     <Header/>
     <Card/>
     <Info/>
     <Animate/>
    
    
    </>
  )
}

export default App
