import { useState } from 'react'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Items from './Components/Items'
import Us from './Components/Us'
import Contact from './Components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='overflow-x-hidden'>
        <Navbar/>
        <Home/>
        <Items/>
        <Us/>
        <Contact/>
     </div>
      
    </>
  )
}

export default App
