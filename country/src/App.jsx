import Card from './components/Card'
import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import data from "./components/data.json";

function App() {
  const [theme, setTheme] = useState(true);
 
  const handleTheme = () => {
    setTheme(!theme);
  }

  
  return (
    <div className={`${theme ? "lightmodebg" : "darkmodebg"}`}>
      <Header handleTheme={handleTheme} text={`${theme ? "Light Mode" : "Dark Mode"}` } />
      <Search theme={theme}  />
      <Card data={ data} />
    </div>
  )
}

export default App
