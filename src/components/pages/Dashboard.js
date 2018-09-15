import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchLocation,editLocation} from '../../actions/location'
import { connect } from 'react-redux';
import Location from '../Location'
import Loader from '../elements/loader'
import { ERROR_FETCH } from '../elements/location_en';
class Dashboard extends Component {
  static propTypes = {
		location: PropTypes.object.isRequired
	};
  componentDidMount(){
    this.props.fetchLocation()
    this.fetchData = this.fetchData.bind(this)
  }
  fetchData(){
    
    const Locations = this.props.location.locationList.map((i,index)=>{
      return(
        <Location key={index} location={i}/>
      )
    })

    if(!this.props.location.fetched && this.props.location.error===null)
          return <Loader size="40px"/>
    else if(!this.props.location.fetched && this.props.location.error!==null)
        return <p>{ERROR_FETCH}: {this.props.location.error}</p>
    else return Locations;
  }
  render() {

    return (
      <div className="App">
        {this.fetchData()}
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
