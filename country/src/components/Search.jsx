
import Dropdown from "./Dropdown";

const Search = ({value, theme, handleSearch}) => {

    
    return (
      <div className="px-20 relative mt-12">
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center border md:w-1/3 rounded-lg">
          <button
            className="px-4 py-2  text-[#858585] rounded-lg  focus:outline-none"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-80 px-4 py-2 bg-transparent  rounded-l focus:outline-none"
            value={value}
            onChange={handleSearch}
          />
            </form>
            <div className={`absolute right-20 top-0  `}>
                <Dropdown theme={theme} />
            </div>
      </div>
    );
};

export default Search;