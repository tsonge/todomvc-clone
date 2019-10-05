import React from 'react';
import ReactDOM from 'react-dom';
import './stylee.css';
import nextId from 'react-id-generator';
import _cloneDeep from 'lodash.clonedeep';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          text: 'Go to gym',
          completed: false,
        },
        {
          text: 'Buy groceries',
          completed: false,
        },
        {
          text: 'Walk the dog',
          completed: false,
        },
      ],
    };
  }

  update(val) {
    this.setState({
      todos: [...this.state.todos, {text: val, completed:false}],
    });
  }

  updateCompleted(ind) {

    let todos = _cloneDeep(this.state.todos);

    todos[ind] = {text: todos[ind].text, completed: !todos[ind].completed};

    this.setState({
      todos
    });
  }

  render() {
    return (
      <React.Fragment>
      <h1>todos</h1>
      <div className="maintodocontent">
        <Inputt update={(val) => this.update(val)}/>
        <TodoList todos={this.state.todos} updateCompleted={(i) => this.updateCompleted(i)}/>
      </div>
      </React.Fragment>
    );
  }
}

class Inputt extends React.Component {

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.update(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <input className="inputt" placeholder="What need's to be done?" onKeyDown={this.handleKeyDown} />
    );
  }
}

class TodoList extends React.Component {
  
  render() {

    return (
      <React.Fragment>
      {this.props.todos.map((todo, ind) => {
        
        const htmlId = nextId();

        return (
          <React.Fragment key={ind}>

          <div className="checkbox">
          <input type="checkbox" id={htmlId} onChange={() => this.props.updateCompleted(ind)}/>
          <label htmlFor={htmlId}></label>
          </div>


          <div className="todo">{todo.text}</div><hr />
          </React.Fragment>
        );

      })}
      </React.Fragment>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('root'));


