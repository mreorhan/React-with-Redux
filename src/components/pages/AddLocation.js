import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ERROR_BLANK} from '../elements/location_en'
import {addLocation} from '../../actions/location'
import {Redirect} from 'react-router-dom'

class AddLocation extends Component{
constructor(props){
    super(props)
    this.state={
        title: this.props.location ? this.props.location.title :'',
        content: this.props.location ? this.props.location.content :'',
        errors:{}
    }
    this.handleChange = this.handleChange.bind(this)
}
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    validate = () => {
        const errors = {};
		    if (!this.state.title) errors.title = ERROR_BLANK
		    if (!this.state.content) errors.content = ERROR_BLANK
		return errors;
	};
    onSubmit=()=>{
        const errors = this.validate();
        this.setState({
			errors,
			redirect: true
		});
        const {title,content} = this.state;

        if (Object.keys(errors).length === 0) 
            this.props.addLocation(title,content)
            
    }
    render(){
        const form = <div>
            <input name="title" value={this.state.title} onChange={this.handleChange}/>
            {this.state.errors.title}
            <input name="content" value={this.state.content} onChange={this.handleChange}/>
            {this.state.errors.content}
            <input onClick={this.onSubmit} type="submit"/>    
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
const mapStateToProps = ({locationOne})=>{
    return{
        locationOne
    }
}
const mapDispatchToProps = {
    addLocation
}

export default connect(mapStateToProps,mapDispatchToProps)(AddLocation)