import { SideBar } from "./components/sidebar/SideBar";
import { TopBar } from "./components/topbar/TopBar";

const App = () => {
  return (
    <div className="App">
      <SideBar />

      <div className="main">
        <TopBar />
        Helllo
      </div>
    </div>
  );
};

export default App;
