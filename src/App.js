import { ExpandMore, FilterAlt, FilterList, Upload } from "@mui/icons-material";
import { SecondTopBar } from "./components/secondary-topbar/SecondTopBar";
import { SideBar } from "./components/sidebar/SideBar";
import { TopBar } from "./components/topbar/TopBar";
import { candidateDetails } from "./data";

const App = () => {
  return (
    <div className="App">
      <SideBar />

      <div className="main">
        <TopBar />
        <SecondTopBar />
        <div className="main--container">
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
          <div className="task--container">
            {candidateDetails.map((task) => {
              return (
                <div className="task--wrapper" key={task.id}>
                  <p className="task--Name">{task.type}</p>
                  <div className="candidate--container">
                    {task.candidates.map((candidate) => {
                      return (
                        <div className="candidate--card" key={candidate.id}>
                          <p className="candidate--name">{candidate.Name}</p>
                          <p className="candidate--from">{candidate.from}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
