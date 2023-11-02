

const Header = ({handleTheme, text, symbol}) => {
  
  return (
    <div className={`border-b shadow-sm `}>
      <div className="flex justify-between items-center px-20 py-4">
        <h1 className="text-3xl font-extrabold">Where in the world?</h1>
        <button
          onClick={handleTheme}
          className="font-bold flex gap-2 items-center"
        >
          <span>
            {symbol}
          </span>
          <h1>{text}</h1>
        </button>
      </div>
    </div>
  );
};

export default Header;
