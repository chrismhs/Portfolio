import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Navigation = React.createClass({
  getInitialState: function() {
    return {active: false};
  },
  toggleNav: function(e) {
    e.preventDefault();
    var currentState = this.state.active;
    this.setState({active: !currentState});
  },
  render: function() {
    return (
      <nav className={this.state.active ? 'navigation active' : 'navigation'} onClick={this.toggleNav} >
        <div className="fill"></div>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <List items={["Home", "Work", "Contact"]}/>
    </nav>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (<ul>
      {this.props.items.map(function(item) {
        return (<li><a href="#">{item}</a></li>)
      })}
    </ul>);
  }
});

ReactDOM.render(
  <Navigation />,
  document.getElementById('content')
);

export default Navigation;