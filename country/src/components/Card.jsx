import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="grid md:grid-cols-4 gap-12 md:px-20 my-12">
      {data.map((country) => (
        <Link key={country.name} to={`/details/${country.name}`}>
          <div className="border-solid border-2 pb-14 shadow-lg rounded-lg">
            {console.log(`Navigating to: /details/${country.name}`)}
            <img
              src={country.flags.png}
              alt="flag"
              className="h-40 w-full rounded-t-lg"
            />

            <div className=" px-8">
              <h1 className="mt-7 text-2xl font-black"> {country.name}</h1>
              <h1 className="mt-3">
                <span className="font-semibold ">Population: </span>{" "}
                {country.population}
              </h1>
              <h1>
                <span className="font-semibold">Region: </span> {country.region}
              </h1>
              <h1>
                <span className="font-semibold">Capital: </span>{" "}
                {country.capital}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
