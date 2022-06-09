import { Person, Redeem } from "@mui/icons-material";
import { useState } from "react";
import { useData } from "../../context/data-context";
import { getSearchItems } from "../../utils/getSearchItems";
import "./topbar.css";
export const TopBar = () => {
  const [search, setSearch] = useState({ text: "", isFormShown: false });
  const [searchData, setSearchData] = useState([]);
  const { candidateData } = useData();

  const closeSearch = () => {
    setSearch({ text: "", isFormShown: false });
  };

  const changeHandler = (e) => {
    if (e.target.value.length >= 1) {
      setSearch({ isFormShown: true, text: e.target.value });
      setSearchData(getSearchItems(candidateData, e.target.value));
    } else {
      closeSearch();
    }
  };
  return (
    <div className="top--bar">
      {search.isFormShown && (
        <div className={`overlay`} onClick={closeSearch}></div>
      )}
      <div>
        <div className="primary--icon">
          <Person />
        </div>
        <div className="company--name">iamneo.ai Talent center</div>
      </div>
      <div className="header--input--container">
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="search"
          value={search.text}
          onChange={(e) => changeHandler(e)}
        />
        {search.isFormShown && (
          <div className={`search--container`}>
            {searchData.length
              ? searchData.map((item) => (
                  <div className="search--item" key={item.id}>
                    <p>{item.Name}</p>
                    <span>{item.from}</span>
                  </div>
                ))
              : "No products found"}
          </div>
        )}
      </div>
      <div>
        <button className="btn--primary">+ Add New</button>
        <Redeem />
        <button className="profile--btn">S</button>
      </div>
    </div>
  );
};
