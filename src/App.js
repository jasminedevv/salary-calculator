import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Header, Container, Divider } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      yearly: 0,
      monthly: 0,
      hourly: 0,
      week: 0,
    }
    this.calculateYearly = this.calculateYearly.bind(this)
  }

  calculateYearly(event) {
    let yearly = event.target.value
    this.setState({yearly: yearly})

    let monthly = this.state.monthly
    let hourly = this.state.hourly
    let week = this.state.week

    // with new yearly value, set the new values

    let new_monthly = yearly / 12
    this.setState({monthly: new_monthly})
  }

  render() {
    return (
      <div className="App" >
      <br/><br/>
      <Header as='h1'>Salary Calculator</Header>
      <br/><br/>
      <Container className="max-300">
      <Input fluid 
        label="yearly" 
        value={this.state.yearly}
        onChange={this.calculateYearly}
        />
      <br/><br/>
      <Input fluid label="monthly" value={this.state.monthly}/>
      <br/><br/>
      <Input fluid label="hourly" value={this.state.hourly}/>
      <br/><br/>
      <Input fluid label="hours /week" value={this.state.week}/>
      <br/><br/>
      <p>Use me to convert hourly pay to monthly and yearly based on how many hours per week you work.</p>
      </Container>
      </div>
    );
  }
}

export default App;
