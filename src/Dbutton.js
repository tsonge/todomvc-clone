import React from 'react';


class Dbutton extends React.Component {



  render() {
    return (<button onClick={() => this.props.del()}>delet</button>);
  }


}



export default Dbutton;
