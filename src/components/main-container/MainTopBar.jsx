import { ExpandMore, FilterAlt, FilterList, Upload } from "@mui/icons-material";
export const MainTopBar = () => {
  return (
    <div className="top--actions">
      <div>
        <div className="action">
          <span>All Candidates</span>- Active(48)
          <ExpandMore />
        </div>
        <div className="action">
          <span>Sort By</span>-Last Updated
          <ExpandMore />
        </div>
      </div>
      <div>
        <FilterList />
        <FilterAlt />

        <Upload />
      </div>
    </div>
  );
};
