import "./style.css";
import propTypes from "prop-types";

const TodoElement = (props) => {
  return (
    <div className="toDoWrap">
      <div className="toDo-container">
        <div className={props.completed ? "completed" : "pending"}>
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          {props.onElementClick && (
            <button className="checked" onClick={props.onElementClick}>
              Completed
            </button>
          )}
          <button className="delete" onClick={props.onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TodoElement.propTypes = {
  onElementClick: propTypes.func,
  completed: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string
};

export default TodoElement;
