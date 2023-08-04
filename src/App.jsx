import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header'
import { Themecontext } from './Context/ThemeContext'


function App() {
  const [count, setCount] = useState(0)
  const[theme,setTheme] = useState("dark")
  useEffect(()=>{
    setTheme(localStorage.getItem(theme)?localStorage.getItem(theme):"light")
  },[])

  return (
    <Themecontext.Provider value={{theme,setTheme}}>
    <div className={`${theme=='dark'?'bg-black text-white':null} min-h-[100vh]`}>
      <Header/>
      <Home/>
      
    </div>
    </Themecontext.Provider>
  )
}

export default App
