import Card from './components/Card'
import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import data from "./components/data.json";


function App() {
  const [theme, setTheme] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredData(data);
      setError(false);
    } else {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.region.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filtered.length === 0) {
        setError(true);
      } else {
        setError(false)
      }
      setFilteredData(filtered);
    }
  }
  const handleTheme = () => {
    setTheme(!theme);
  }

  
  return (
    <div className={`${theme ? "lightmodebg" : "darkmodebg"}`}>
      <Header
        handleTheme={handleTheme}
        text={`${theme ? "Light Mode" : "Dark Mode"}`}
      />
      <Search theme={theme} handleSearch={handleSearch} />
      {error ? (
        <p className="text-red-500">No search results found.</p>
      ) : (
        <Card data={filteredData} />
      )}
      
    </div>
  );
}

export default App
