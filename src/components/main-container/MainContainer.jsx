import { MainTopBar } from "./MainTopBar";
import { TaskContainer } from "./TaskContainer";

export const MainContainer = () => {
  return (
    <div className="main--container">
      <MainTopBar />
      <TaskContainer />
    </div>
  );
};
