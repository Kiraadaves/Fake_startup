import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect, useContext } from "react";
import country from "./data.json";
import { ThemeContext } from "../ThemeContext";

const Details = () => {
  const { name } = useParams();
  const [item, setItem] = useState(null);
  const theme = useContext(ThemeContext);
  console.log(theme);
  useEffect(() => {
    fetch({ country });
    const selectedItem = country.find((item) => item.name === name);
    setItem(selectedItem);
  }, [name]);

  if (!item) {
    return <div>Loading data...</div>;
  }

  return (
    <div className={`details ${theme ? "dark" : "light"}`}>
      <Header
        
        text={`${theme ? "Dark Mode" : "Light Mode"}`}
      />
      <div className="mt-16 md:px-20">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="md:px-20 mt-16 grid md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <img src={item.flags.png} alt="flag" className="h-full w-full " />
        </div>
        <div className="py-10">
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <div className="mt-10 grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold">
                Native Name:{" "}
                <span className="font-normal">{item.nativeName}</span>
              </h1>
              <h1 className="font-bold">
                Population:{" "}
                <span className="font-normal">{item.population}</span>
              </h1>
              <h1 className="font-bold">
                Region: <span className="font-normal">{item.region}</span>
              </h1>
              <h1 className="font-bold">
                Sub Region:{" "}
                <span className="font-normal">{item.subregion}</span>
              </h1>
              <h1 className="font-bold">
                Capital: <span className="font-normal">{item.capital}</span>
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="font-bold">
                Top Level Domain:{" "}
                <span className="font-normal">{item.topLevelDomain}</span>
              </h1>
              <h1 className="font-bold">
                Currencies: <span className="font-normal">{item.currency}</span>
              </h1>
              <h1 className="font-bold">
                Languages: <span className="font-normal">{item.language}</span>
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-bold">
              Border Countries: <span></span>
              <span></span>
              <span></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
