import React, { Component } from "react";
class Counter extends Component {
  /* here we are converting this component as controlled component*/
  //   state = {
  //     count: this.props.counter.value,
  //     // tags: ["tag1", "tag2", "tag3"],
  //   };

  //   old way of handling evnts.
  //   constructor(){
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement(){
  //       console.log('Increment Clicked !',this)
  //   }

  // modren way
  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  //   handleIncrement = (product) => {
  //     console.log(product);
  //     this.setState({ count: this.state.count + 1 });
  //   };
  render() {
    const { value } = this.props.counter;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
          //   onClick={this.handleIncrement}
          // if we want to pass an event argument then we have to use an arrow function as follows
          //   oncClick={() => this.handleIncrement(product)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.length === 0 ? (
            <h1>no item to display</h1>
          ) : (
            this.state.tags.map((tag) => <li key={Math.random()}>{tag}</li>)
          )}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
