import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Header, Container, Divider } from 'semantic-ui-react'

function legible(num) {
  return parseInt(num)
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      yearly: 60000,
      monthly: 5000,
      hourly: 38,
      week: 30,
    }
    this.calculateYearly = this.calculateYearly.bind(this)
    this.calculateMonthly = this.calculateMonthly.bind(this)
    this.calculateHourly = this.calculateHourly.bind(this)
    this.calculateWeek = this.calculateWeek.bind(this)
  }

  calculateWeek(event) {
    let week = event.target.value
    this.setState({week: week})

    let yearly = this.state.yearly
    let monthly = this.state.monthly
    let hourly = this.state.hourly

    // with new hours/week, calculate salary
    let new_monthly = hourly * week * 4.3
    this.setState({monthly: new_monthly})

    let new_yearly = new_monthly * 12
    this.setState({yearly: new_yearly})
  }

  calculateHourly(event) {
    let hourly = event.target.value
    this.setState({hourly: hourly})

    let week = this.state.week

    // with new hourly value, calculate the other
    let new_monthly = hourly * week * 4.3
    this.setState({monthly: new_monthly})

    let new_yearly = new_monthly * 12
    this.setState({yearly: new_yearly})
  }

  calculateMonthly(event) {
    let monthly = event.target.value
    this.setState({monthly: monthly})

    let week = this.state.week

    // with new monthly value, calculate the others
    let new_yearly = monthly * 12
    this.setState({yearly: new_yearly})

    let new_hourly = monthly / 4.3 / week
    this.setState({hourly: new_hourly})
  }

  calculateYearly(event) {
    let yearly = event.target.value
    this.setState({yearly: yearly})

    let week = this.state.week

    // with new yearly value, set the new values
    let new_monthly = yearly / 12
    this.setState({monthly: new_monthly})

    let new_hourly = yearly / 52 / week // TODO: what's the equation?
    this.setState({hourly: new_hourly})
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
        value={legible(this.state.yearly)}
        onChange={this.calculateYearly}
        />
      <br/><br/>
      <Input fluid 
        label="monthly" 
        value={legible(this.state.monthly)}
        onChange={this.calculateMonthly}
        />
      <br/><br/>
      <Input fluid 
        label="hourly" 
        value={legible(this.state.hourly)}
        onChange={this.calculateHourly}
        />
      <br/><br/>
      <Input fluid 
        label="hours /week" 
        value={legible(this.state.week)}
        onChange={this.calculateWeek}
        />
      <br/><br/>
      <p>Use me to convert hourly pay to monthly and yearly based on how many hours per week you work.</p>
      </Container>
      </div>
    );
  }
}

export default App;
