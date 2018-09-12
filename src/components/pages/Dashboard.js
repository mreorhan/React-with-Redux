import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchLocation,editLocation} from '../../actions/location'
import { connect } from 'react-redux';
import Location from '../Location'
import Loader from '../elements/loader'
class Dashboard extends Component {
  static propTypes = {
		location: PropTypes.object.isRequired
	};
  componentDidMount(){
    this.props.fetchLocation()
  }
  render() {
    const Locations = this.props.location.locationList.map((i,index)=>{
      return(
        <Location key={index} location={i}/>
      )
    })

    return (
      <div className="App">
        {this.props.location.fetched || <Loader size="40px"/> }
         {Locations}
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
    fetchLocation,
    editLocation
};
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
