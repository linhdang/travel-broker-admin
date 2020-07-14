import React, {Component} from 'react';
import Agents from './components/agents'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      providers: [],
      planners: []
    }
  }

  componentDidMount() {
    console.log("call didmount")
    fetch('/travel-broker/providers/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ providers: data._embedded["mams.ProviderRegistration"] })
    })
    .catch(console.log)

    fetch('/travel-broker/planners/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ planners: data._embedded["mams.PlannerRegistration"] })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div>
        <h1> Providers </h1>
        <Agents agents={this.state.providers} />
        <h1> Planners </h1>
        <Agents agents={this.state.planners} />
      </div>
    );
  }
}

export default App;
