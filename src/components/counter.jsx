import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //tags: ["tag1"]
    tags: []
  };

  constructor() {
    super();
    console.log("Constructor ", this);
    this.handleIncrement = this.handleIncrement.bind(this);
    //this bind method return new instance of the func and in this method 'this ' refernce to current Counter object
    //get the func from bind method and set to the  func
  }

  rendertags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    console.log("increment clicked", this);
    //obhj.method; returns reference of obj
    //function(); reutrn reference of window obj, if strict mode enable return undefined
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create new tags Ankit"}
        {this.rendertags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
