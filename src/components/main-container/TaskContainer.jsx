import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { useData } from "../../context/data-context";
import { TaskWrapper } from "./TaskWrapper";

export const TaskContainer = () => {
  const { candidateData, setCandidateData } = useData();

  const handleDragEnd = ({ destination, source, draggableId, type }) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    if (type === "task") {
      const sourceObj = candidateData.find((task) => task.id === draggableId);
      const newTaskData = [...candidateData];

      newTaskData.splice(source.index, 1);

      newTaskData.splice(destination.index, 0, sourceObj);
      setCandidateData(newTaskData);
      return;
    }
    const startObj = candidateData.find(
      (task) => task.id === source.droppableId
    );
    const endObj = candidateData.find(
      (task) => task.id === destination.droppableId
    );
    if (startObj === endObj) {
      const updatedCandidates = [...startObj.candidates];
      updatedCandidates.splice(source.index, 1);
      updatedCandidates.splice(
        destination.index,
        0,
        startObj.candidates.find((candidate) => candidate.id === draggableId)
      );
      setCandidateData(
        candidateData.map((task) =>
          task.id === startObj.id
            ? { ...task, candidates: updatedCandidates }
            : task
        )
      );
    } else {
      const startCandidates = [...startObj.candidates];
      startCandidates.splice(source.index, 1);
      const endCandidates = [...endObj.candidates];
      endCandidates.splice(
        destination.index,
        0,
        startObj.candidates.find((candidate) => candidate.id === draggableId)
      );

      setCandidateData(
        candidateData.map((task) =>
          task.id === startObj.id || task.id === endObj.id
            ? task.id === startObj.id
              ? { ...task, candidates: startCandidates }
              : { ...task, candidates: endCandidates }
            : task
        )
      );
    }
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="task--container"
        direction="horizontal"
        type="task"
        style={{ overflow: "auto" }}
      >
        {(provided) => (
          <div
            className="task--container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {candidateData.map((task, index) => (
              <TaskWrapper task={task} key={task.id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
