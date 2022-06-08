import { ChevronRight, ExpandMore, WorkOutline } from "@mui/icons-material";
import "./secondtopbar.css";

export const SecondTopBar = () => {
  return (
    <div className="second--top--bar">
      <div className="left">
        <WorkOutline />
        Jobs
        <ChevronRight />
        <p>Full Stack Engineer</p>
      </div>
      <div>
        <button className="btn--secondary">
          Add Candidate <ExpandMore />
        </button>
        <button className="btn--primary">
          Published <ExpandMore />
        </button>
      </div>
    </div>
  );
};
