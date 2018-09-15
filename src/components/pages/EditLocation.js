import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {ERROR_BLANK} from '../elements/location_en'
import {fetchLocationById,editLocation,deleteLocation} from '../../actions/location'
class EditLocation extends Component{
constructor(props){
    super(props)
    this.state={
        title: this.props.location ? this.props.location.title :'',
        content: this.props.location ? this.props.location.content :'',
        errors:{}
    }
    console.log(this.props.location)
    this.handleChange = this.handleChange.bind(this)
    this.onDelete = this.onDelete.bind(this)
}
    componentDidMount(){
        const { match } = this.props;
		if (!this.props.location && match.params._id) {
          this.props.fetchLocationById(match.params._id);
		}
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentWillReceiveProps(nextProps) {
        const { location } = nextProps.locationOne;
		if (
			location.title
			&&
			location.title !== this.state.title
		) {
			this.setState({
				title: location.title,
				content: location.content,
			});

        }

    }
    validate = () => {
        const errors = {};
		    if (!this.state.title) errors.title = ERROR_BLANK
		    if (!this.state.content) errors.content = ERROR_BLANK
		return errors;
    };
    
    async onDelete() {
        const {match,deleteLocation} = this.props;
        await deleteLocation(match.params._id);
        const second = await this.props.locationOne;
        this.setState({
			redirect: true
        });
        console.log("result", second)
      }
    onSubmit=()=>{
        const errors = this.validate();
        this.setState({
			errors,
			redirect: true
		});
        const {title,content} = this.state;
        const {match} = this.props;

        if (Object.keys(errors).length === 0) 
            this.props.editLocation(title,content,match.params._id)
            
    }
    render(){
        const form = <div>
        <input name="title" value={this.state.title} onChange={this.handleChange}/>
        {this.state.errors.title}
        <input name="content" value={this.state.content} onChange={this.handleChange}/>
        {this.state.errors.content}
        <input onClick={this.onSubmit} type="submit"/>
        <input onClick={this.onDelete} type="submit" value="Delete"/>       
</div>
        return(
            <div>
                {
                this.props.locationOne.done && this.state.redirect
                    ? <Redirect to="/" /> : form
                }
            </div>
        )
    }
}
const mapStateToProps=({location,locationOne},props)=>{
    return{
        location:location.locationList.find(item => item._id === props.match.params._id),
        locationOne
    }
}
const mapDispatchToProps = {
    fetchLocationById,
    editLocation,
    deleteLocation
}
export default connect(mapStateToProps,mapDispatchToProps)(EditLocation)