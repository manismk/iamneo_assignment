import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { candidateDetails } from "../../data";
import { TaskWrapper } from "./TaskWrapper";

export const TaskContainer = () => {
  const [candidateData, setCandidateData] = useState(candidateDetails);
  const handleDragEnd = ({ destination, source, draggableId }) => {
    // console.log(destination, source, draggableId);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

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
      <div className="task--container">
        {candidateData.map((task) => (
          <TaskWrapper task={task} key={task.id} />
        ))}
      </div>
    </DragDropContext>
  );
};
