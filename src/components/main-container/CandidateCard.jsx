import { Draggable } from "react-beautiful-dnd";

export const CandidateCard = ({ candidate, index }) => {
  return (
    <Draggable draggableId={candidate.id} index={index}>
      {(provided) => (
        <div
          className="candidate--card"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <p className="candidate--name">{candidate.Name}</p>
          <p className="candidate--from">{candidate.from}</p>
        </div>
      )}
    </Draggable>
  );
};
