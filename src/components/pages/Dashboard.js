import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchLocation} from '../../actions/location'
import { connect } from 'react-redux';
class Dashboard extends Component {
  static propTypes = {
		location: PropTypes.object.isRequired
	};
  componentDidMount(){
    this.props.fetchLocation()
  }
  render() {
    console.log(this.props.location.locationList)
    const x = this.props.location.locationList.map((i,index)=>{
      return(
        <p key={index}>{i.title}</p>
      )
    })
    return (
      <div className="App">
        {this.props.location.fetched || <p>loading</p>}
         {x}
      </div>
    );
  }
}
const mapStateToProps=({location})=>{
  return{
    location
  }
}
const mapDispatchToProps = {
	fetchLocation
};
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
