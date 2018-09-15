import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ERROR_BLANK, ERROR_FETCH, ERROR_FETCH_ADD} from '../elements/location_en'
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
    this.form = this.form.bind(this)
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
       
        const {title,content} = this.state;
        this.setState({
            errors
        });
        if (Object.keys(errors).length === 0){
            this.props.addLocation(title,content)
            this.setState({
                redirect: true
            });
        }
            
    }
    form =()=>{
        const form = <div>
            <input name="title" value={this.state.title} onChange={this.handleChange}/>
            {this.state.errors.title}
            <input name="content" value={this.state.content} onChange={this.handleChange}/>
            {this.state.errors.content}
            <input onClick={this.onSubmit} type="submit"/>    
        </div>

        if(this.props.locationOne.doneAdd && this.state.redirect)
            return <Redirect to="/"/>
        else
            return form
    }
    render(){
        
        
        return(
            
           <div>
            {
                this.form()
            }
            {!this.props.locationOne.doneAdd && this.props.locationOne.error!=="" ? <p>{ERROR_FETCH}<br/><b>{ERROR_FETCH_ADD}</b></p> :""}
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