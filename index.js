import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialItems : [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"  
      ],
      items: []
    };

    this.filterList = this.filterList.bind(this);

  }

  componentWillMount(){
    this.setState({
      items: this.state.initialItems
    });
  }

  filterList(e){
    let updateList = this.state.initialItems;
    updateList = updateList.filter(item => {
      return item.toLowerCase().search(
        e.target.value.toLowerCase()
        ) !== -1;
    });

    this.setState({
      items: updateList
    });
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.filterList} />
        <ul>
          {this.state.items.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
