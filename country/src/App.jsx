import Card from "./components/Card";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import data from "./components/data.json";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./ThemeContext";
import Lightbutton from "./components/Lightbutton";
import Darkbutton from "./components/Darkbutton";
function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const handleTheme = () => {
    setSelectedTheme((currentTheme) => (currentTheme === light ? dark : light));
  };
  const [filteredData, setFilteredData] = useState(data);
  const [error, setError] = useState(false);
  console.log(selectedTheme);
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
        setError(false);
      }
      setFilteredData(filtered);
    }
  };
  const buttonComponent =
    selectedTheme === light ? <Lightbutton /> : <Darkbutton />;
  const setTheme = selectedTheme === light ? "light" : "dark";
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className={`${selectedTheme === light ? "light" : "dark"}`}>
        <Header
          handleTheme={handleTheme}
          symbol={buttonComponent}
          text={`${selectedTheme === light ? "Light Mode" : "Dark Mode"}`}
        />
        <Search
          theme={selectedTheme}
          light={light}
          handleSearch={handleSearch}
        />
        {error ? (
          <p className="text-red-500">No search results found.</p>
        ) : (
          <Card data={filteredData} theme={setTheme} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
