import React,{ useState} from 'react'
import Navbar from './components/Navbar'

const App = (props) =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false) 

  const handleIsLoggedIn =() =>{
    // if(localStorage.getItem('token')){/
      setIsLoggedIn(!isLoggedIn)
      // handleIsLoggedIn()
    // }
  }

  // useCallback(()=>{
  // handleIsLoggedIn()
  //     setIsLoggedIn(!isLoggedIn)
  //   }
  // },[isLoggedIn])

  setTimeout(()=>{
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }
  },0)

  return (      
    <div
      style={{height:"100vh"}}>   
        <Navbar
            handleIsLoggedIn={handleIsLoggedIn}
            isLoggedIn={isLoggedIn}
        />
    </div>
  )
}

export default App