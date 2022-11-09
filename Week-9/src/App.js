import "./style.css";
import { v4 as uuid } from "uuid";
import TodoElement from "./Components/TodoElement/todoElement";
import React from "react";
import Header from "./Components/Header/Header";

const data = [
  {
    id: uuid(),
    title: "Task 1",
    description: "Description 1",
    completed: true
  },
  {
    id: uuid(),
    title: "Task 2",
    description: "Description 2",
    completed: false
  },
  {
    id: uuid(),
    title: "Task 3",
    description: "Description 3",
    completed: true
  },
  {
    id: uuid(),
    title: "Task 4",
    description: "Description 4",
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: data,
      title: "",
      description: ""
    };
  }

  handleAddTodo = () => {
    let toDo = {
      id: uuid(),
      title: this.state.title,
      description: this.state.description,
      completed: false
    };

    const todoList = this.state.toDoList;
    todoList.push(toDo);
    this.setState({
      todoList,
      title: "",
      description: ""
    });
  };

  handleCompleted = (id) => {
    const toDoIndex = this.state.toDoList.findIndex((todo) => todo.id === id);
    if (toDoIndex !== -1) {
      const toDo = this.state.toDoList;
      toDo[toDoIndex].completed = true;
      this.setState({
        toDoList: toDo
      });
    }
  };

  handleDelete = (id) => {
    const toDoIndex = this.state.toDoList.findIndex((todo) => todo.id === id);
    if (toDoIndex !== -1) {
      const toDo = this.state.toDoList;
      toDo.splice(toDoIndex, 1);
      this.setState({
        toDoList: toDo
      });
    }
  };

  render() {
    return (
      <div>
        <Header />

        <div className="input-container">
          <div className="input-group">
            <input
              type="text"
              id="title"
              placeholder="Title..."
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            />
            <input
              type="text"
              id="description"
              placeholder="Description..."
              value={this.state.description}
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            />
            <button onClick={this.handleAddTodo}>Add</button>
          </div>
        </div>

        <div className="App">
          {this.state.toDoList
            .filter((toDo) => !toDo.completed)
            .map((toDo) => {
              return (
                <TodoElement
                  key={toDo.id}
                  title={toDo.title}
                  description={toDo.description}
                  completed={toDo.completed}
                  onElementClick={() => this.handleCompleted(toDo.id)}
                  onDeleteClick={() => this.handleDelete(toDo.id)}
                />
              );
            })}
        </div>

        <div className="App">
          {this.state.toDoList
            .filter((toDo) => toDo.completed)
            .map((toDo) => {
              return (
                <TodoElement
                  key={toDo.id}
                  title={toDo.title}
                  description={toDo.description}
                  completed={toDo.completed}
                  onDeleteClick={() => this.handleDelete(toDo.id)}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
