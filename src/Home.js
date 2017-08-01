import React, { Component } from 'react';

class Home extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>React app and Automated testing playground</h2>
        <p>This fun project is where I'm playing with a react project I cloned from team treehouse, and using it to practice automated testing with selenium and mocha with chai.</p>
        <p>I haven't made many changes to the react app, as I'm mostly just creating the test suite right now, and exploring what it can do.</p>
        <p>If you happen to check this site out and have automation advice feel free to let me know.</p>
        <hr />
        <h3>The Teacher Search Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={ (input) => this.name = input } />
          <input type="text" placeholder="Topic" ref={ (input) => this.topic = input } />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;
