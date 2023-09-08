import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class BackButton extends Component {
    goBack = () => {
        this.props.history.goBack(); 
      };
  render() {
    return (
      <button className='back-button' onClick={this.goBack}>
        <i className="fa fa-arrow-left"></i>
      </button>
    )
  }
}
export default withRouter(BackButton)

