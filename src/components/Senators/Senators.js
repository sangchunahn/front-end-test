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
      personDetails: ''
    }
  }
  componentWillMount() {
    this.props.getSenators(this.state.state)
  }

  handleClick(event, senator) {
    console.log('event: ', senator);
    this.setState({
      personDetails: senator
    })
  }

  render() {
    console.log('this.props: ', this.props.senator.results)
    return (
      <div className='senators-container'>
            <div className='senator-list'>
              <h3>List of Senators</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Party</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(this.props.senator.results, senator => {
                    return (
                      <tr key={senator.name} onClick={(event) => {
                        this.handleClick(event, senator)
                        }}>
                        <td>{senator.name}</td>  
                        <td>{senator.party}</td>  
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className='senator-details'>

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