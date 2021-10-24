import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");

    const SearchContainer = document.querySelector('.search-container');
    SearchContainer.classList.remove('Show');
  };

  return (
    <div>
      <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="search-container-mv">
          <div className="clearInput" onClick={clearInput}></div>
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="SearchResult">
                  <div className="result-img">
                      <img src={value['wide-cover-anime']} alt={value.name} /> 
                  </div> 
                  <div className="result-txt">
                      <div className="result-name">
                          {value.name}
                      </div>
                      <div className={"result-type " + value.type}>
                          {value.type}
                      </div>
                  </div>
                  <Link className="dataItem" to={value.url} onClick={clearInput}></Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default SearchBar;
