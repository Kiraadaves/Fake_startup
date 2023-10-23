const Card = ({ data }) => {
  const results = data.map(country => (
        <div
          key={country.id}
          className="border-solid border-2 pb-14 shadow-lg rounded-lg"
        >
          <img
            src={country.flags.png}
            alt="flag"
            className="h-40 w-full rounded-t-lg"
          />

          <div className=" pl-8">
            <h1 className="mt-7 text-2xl font-black"> {country.name}</h1>
            <h1 className="mt-3">
              <span className="font-semibold ">Population: </span>{" "}
              {country.population}
            </h1>
            <h1>
              <span className="font-semibold">Region: </span> {country.region}
            </h1>
            <h1>
              <span className="font-semibold">Capital: </span> {country.capital}
            </h1>
          </div>
        </div>
  ))
  const content = results?.length ? results : <article><p>Nothing Found</p></article>
  return (
    <div className="grid md:grid-cols-4 gap-12 md:px-20 my-12">
        {content}
    </div>
  );
};

export default Card;
