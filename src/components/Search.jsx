// Import icons
import searchIcon from "../assets/icons/search.svg";
const Search = () => {
  return (
    <form
      action=""
      className="flex justify-center items-center gap-1 bg-gray-100 py-3 px-5 rounded-md"
    >
      <div>
        <select name="" id="" className="border-r border-gray-300 pr-2">
          <option value="">All Generes</option>
        </select>
      </div>
      <div className="flex-1">
        <input
          className="outline-none"
          type="text"
          id="search"
          placeholder="Search for eBooks..."
        />
      </div>
      <div>
        <label htmlFor="search">
          <img
            className="w-5 cursor-pointer"
            src={searchIcon}
            alt="Search icon"
          />
        </label>
      </div>
    </form>
  );
};

export default Search;
