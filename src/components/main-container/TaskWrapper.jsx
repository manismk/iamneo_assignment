import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { CandidateCard } from "./CandidateCard";

export const TaskWrapper = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task--wrapper"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <p className="task--Name" {...provided.dragHandleProps}>
            {task.type}
          </p>
          <Droppable droppableId={task.id} type="candidate">
            {(provided) => (
              <div
                className="candidate--container"
                ref={provided.innerRef}
                {...provided.droppableProps}
                key={task.id}
              >
                {task.candidates.map((candidate, index) => (
                  <CandidateCard
                    candidate={candidate}
                    key={candidate.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
