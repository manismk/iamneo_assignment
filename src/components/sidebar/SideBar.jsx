import {
  HelpOutline,
  Message,
  MoreVert,
  PeopleOutline,
  Print,
  Public,
  Settings,
  WorkOutline,
} from "@mui/icons-material";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <div className="side--bar">
      <div className="side--bar--top">
        <Public />
        <Print />
        <WorkOutline className="active" />
        <PeopleOutline />
        <Settings />
      </div>
      <div className="side--bar--down">
        <HelpOutline />
        <Message />
        <MoreVert />
      </div>
    </div>
  );
};
