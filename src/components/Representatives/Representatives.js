import React, { Component } from 'react';
import { getSenators } from '../../services/index';
import { getReps } from '../../services/index';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import states from '../../states_titlecase.json'
import './Representatives.css';
import _ from 'lodash';

class Representatives extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      state: 'States',
      selectValue: 'Rep/Senator',
      reps: '',
      personDetails: {
        firstName: 'First Name',
        lastName: 'Last Name',
        district: 'District',
        phone: 'Phone',
        office: 'Office',
      }
    }
  }
  handleSubmit() {
    if (this.state.selectValue === 'senator') {
      return this.props.getSenators(this.state.state)
      .then(() => {
        this.setState({
          reps: this.props.senator
        })
      })
    } else {
    return this.props.getReps(this.state.state)
    .then(() => {
      this.setState({
        reps: this.props.rep
      })
    })
    }
  }

  handleClick(event, senator) {
    let firstName = senator.name.split(' ').slice(0, -1).join(' ')
    let lastName = senator.name.split(' ').slice(-1).join(' ')
    this.setState({
      personDetails: {
        firstName: firstName,
        lastName: lastName,
        district: senator.district,
        phone: senator.phone,
        office: senator.office,
      }
    })
  }

  handleChange(event) {
    this.setState({selectValue:event.target.value});
  }

  handleChangeStates(event) {
    this.setState({state: event.target.value});
  }

  render() {
    return (
      <div>
        <div className='dropdown-container'>
          <select
          className='select-value' 
          defaultValue={this.state.selectValue} 
          onChange={this.handleChange} 
          >
            <option value="rep">Representatives</option>
            <option value="senator">Senators</option>
          </select>
          <select
          className='select-value' 
          defaultValue={this.state.state} 
          onChange={this.handleChangeStates} 
          >
          {_.map(states, state => {
            return (
              <option key={state.abbreviation} value={state.abbreviation}>{state.abbreviation}</option>
            )
          })}
          </select>
          <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
        </div> 
        <div className='senators-container'>
              <div className='senator-list'>
                <h3>List / <span>Representatives</span> </h3>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(this.state.reps.results, rep => {
                      let party = rep.party.charAt(0)
                      return (
                        <tr key={rep.name} onClick={(event) => {
                          this.handleClick(event, rep)
                          }}>
                          <td>{rep.name}</td>  
                          <td>{party}</td>  
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className='senator-details'>
                <h3>Info</h3>
                <div className='info-container'>
                  <span>{this.state.personDetails.firstName}</span>
                  <span>{this.state.personDetails.lastName}</span>
                  <span>{this.state.personDetails.district}</span>
                  <span>{this.state.personDetails.phone}</span>
                  <span>{this.state.personDetails.office}</span>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        senator: state.senators.all,
        rep: state.reps.all
    }
}

export default connect(mapStateToProps, {getSenators, getReps})(Representatives);