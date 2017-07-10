import React, { Component } from 'react';
import { getSenators } from '../../services/index'
import { connect } from 'react-redux';
import autoBind from 'react-autobind'
import './Senators.css'
import _ from 'lodash'

class Senators extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      state: 'UT',
      personDetails: {
        firstName: 'First Name',
        lastName: 'Last Name',
        district: 'District',
        phone: 'Phone',
        office: 'Office',
      }
    }
  }
  componentWillMount() {
    this.props.getSenators(this.state.state)
  }

  handleClick(event, senator) {
    console.log('event: ', senator);
    let firstName = senator.name.split(' ').slice(0, -1).join(' ')
    let lastName = senator.name.split(' ').slice(-1).join(' ')
    console.log('lastName: ', lastName);
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

  render() {
    console.log('this.props: ', this.props.senator.results)
    return (
      <div className='senators-container'>
            <div className='senator-list'>
              <h3>List of Represenatives</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Party</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(this.props.senator.results, senator => {
                    let party = senator.party.charAt(0)
                    return (
                      <tr key={senator.name} onClick={(event) => {
                        this.handleClick(event, senator)
                        }}>
                        <td>{senator.name}</td>  
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
    );
  }
}

function mapStateToProps(state) {
    return {
        senator: state.senators.all,
    }
}

export default connect(mapStateToProps, {getSenators})(Senators);