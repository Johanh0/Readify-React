// Import React Functionalities
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../App";
// Import Utils
import { searchQuery } from "../utils/searchQuery";
// Import icons
import searchIcon from "../assets/icons/search.svg";

const Search = () => {
  const { searchResult, setSearchResult } = useContext(Context);

  // Current Path
  const urlPath = useLocation().pathname;
  const navigate = useNavigate();

  const [category, setCategory] = useState("Fiction");
  const [inputQuery, setInputQuery] = useState("");

  const hanldeSearch = async (e) => {
    e.preventDefault();
    if (urlPath !== "/catalog") {
      navigate("/catalog");
    }

    try {
      const searchEbooks = await searchQuery(
        `search/${category}/${inputQuery}`
      );
      setSearchResult(searchEbooks);
      console.log(searchEbooks);
    } catch (error) {
      console.error("Error during search:", error);
      setSearchResult([]);
    }
  };

  // useEffect(() => {
  //   console.log(urlPath);
  // }, []);

  return (
    <form
      onSubmit={(e) => hanldeSearch(e)}
      action=""
      className="flex justify-center items-center gap-1 bg-gray-100 py-3 px-5 rounded-md"
    >
      <div>
        <select
          onChange={(e) => setCategory(e.target.value)}
          name=""
          id=""
          className="border-r border-gray-300 pr-2"
        >
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Business">Business</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Finance">Finance</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Biography">Biography</option>
          <option value="Art">Art</option>
          <option value="Politics">Politics</option>
          <option value="History">History</option>
        </select>
      </div>
      <div className="flex-1">
        <input
          className="outline-none"
          type="text"
          id="search"
          placeholder="Search for eBooks..."
          onInput={(e) => setInputQuery(e.target.value)}
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
