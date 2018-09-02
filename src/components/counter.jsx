import React, { Component } from "react";

class Counter extends Component {
  state = {
    //count: this.props.counter.value,
    //tags: ["tag1"]
    tags: []
  };
  /*Method 1 */
  // constructor() {
  //   super();
  //   console.log("Constructor ", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   //this bind method return new instance of the func and in this method 'this ' refernce to current Counter object
  //   //get the func from bind method and set to the  func
  // }

  rendertags() {
    // if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {/* {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))} */}
      </ul>
    );
  }

  /*Method 1 */

  // handleIncrement() {
  //   console.log("increment clicked", this);
  //   //obhj.method; returns reference of obj
  //   //function(); reutrn reference of window obj, if strict mode enable return undefined
  // }

  /*Method 2 fo calling a function */
  // handleIncrement = product => {
  //   console.log(product);
  //   //console.log("Increment Clicked", this);
  //   //this.state.count++;
  //   this.setState({ count: this.state.count + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  getBadgeClasses() {
    console.log("this=>", this);
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    //console.log("props", this.props);

    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={() => this.handleIncrement(product)} //'product' is not defined  no-undef
          onClick={() => this.props.onIncrement(this.props.counter)}
          //  onClick={this.handleIncrement}
          //onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please create new tags Ankit"} */}
        {this.rendertags()}
      </React.Fragment>
    );
  }
}

export default Counter;
