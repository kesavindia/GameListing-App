import React,{useState,useContext, useEffect} from "react";
import logo from "../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon,HiSun } from "react-icons/hi2";
import { Themecontext } from "../Context/ThemeContext";
function Header() {
    const[toggle,setToggle] = useState(false)
    const{theme,setTheme}=useContext(Themecontext)
    useEffect(()=>{
        console.log(`Theme ${theme}`)
    },[])
    const handleChange=()=>{
        setToggle(!toggle)
    }

 
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex mx-5 rounded-full bg-slate-200 p-2 w-full items-center">
        <HiOutlineMagnifyingGlass  className="text-black"/>
        <input placeholder="Search Games" className=" bg-transparent outline-none px-2 w-full text-black" type="text" />
      </div>
      <div   className="cursor-pointer">
        {theme=="light"?(<HiMoon  onClick={()=>{setTheme("dark"),localStorage.setItem(theme,'dark')}} className="text-[35px] text-black bg-slate-200 p-1 rounded-full" />):(
        <HiSun onClick={()=>{setTheme("light"),localStorage.setItem(theme,'light')}}className="text-[35px] text-black bg-slate-200 p-1 rounded-full"/>)}
      </div>
    </div>
  );
}

export default Header;
