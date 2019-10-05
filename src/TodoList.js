import React from 'react';


class TodoList extends React.Component {

  render() {
    return (
      <React.Fragment>
        Our current todos:
        <div>
          {
            this.props.todos.map((todo, index) => {
              return (<React.Fragment>
                        <h1>{todo}</h1><button onClick={() => this.props.delspecific(index)}>pop</button>
                      </React.Fragment>
              );
            })
          }
        </div>
      </React.Fragment>
    );
  }


}



export default TodoList;
