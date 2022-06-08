import { Droppable } from "react-beautiful-dnd";
import { CandidateCard } from "./CandidateCard";

export const TaskWrapper = ({ task }) => {
  return (
    <Droppable droppableId={task.id}>
      {(provided) => (
        <div
          key={task.id}
          className="task--wrapper"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <p className="task--Name">{task.type}</p>
          <div className="candidate--container">
            {task.candidates.map((candidate, index) => (
              <CandidateCard
                candidate={candidate}
                key={candidate.id}
                index={index}
              />
            ))}
          </div>

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
