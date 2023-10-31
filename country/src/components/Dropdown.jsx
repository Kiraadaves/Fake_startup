import { useState} from 'react';


const Dropdown = ({theme}) => {
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
  return (
    
      <div className={`${theme ? "light" : "dark"}`}>
        <button
          onClick={handleOpen}
          className="flex gap-2 items-center border py-2 shadow-lg rounded-lg px-7 "
        >
          <h1 className="text-base font-semibold pr-1">Filter by Region</h1>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#858585"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#858585"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        {open && (
          <div
            className={`pt-3 pb-6 absolute top-12 border  shadow-lg rounded-lg px-9 bg-inherit  `}
          >
            <ul className={` text-sm font-semibold `}>
              <li className="pr-20 mt-2">America</li>
              <li className="pr-20 mt-2">Africa</li>
              <li className="pr-20 mt-2">Asia</li>
              <li className="pr-20 mt-2">Europe</li>
              <li className="pr-20 mt-2">Oceania</li>
            </ul>
          </div>
        )}
      </div>
  );
};

export default Dropdown;