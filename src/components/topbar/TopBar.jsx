import { Person, Redeem } from "@mui/icons-material";
import "./topbar.css";
export const TopBar = () => {
  return (
    <div className="top--bar">
      <div>
        <div className="primary--icon">
          <Person />
        </div>
        <div className="company--name">iamneo.ai Talent center</div>
      </div>
      <div>
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="search"
        />
        <button className="btn--primary">+ Add New</button>
        <Redeem />
        <button className="profile--btn">S</button>
      </div>
    </div>
  );
};
