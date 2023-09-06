import './Header.css'
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Hader(props){
  const {theme, setTheme} = props
  function ToggleTheme(){
    if(theme == 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span onClick={ToggleTheme} >{theme == 'light' ? 'Light Mode' : 'Dark Mode'}</span>
        <span className="swap-theme" onClick={ToggleTheme} >
          {theme=="light"?<BsFillSunFill/>:<BsMoonStarsFill/>}
        </span>
      </div>
    </header>
  )
}