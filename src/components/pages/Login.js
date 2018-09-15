import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {ERROR_FETCH,ERROR_BLANK} from '../elements/location_en'
import {authentication} from '../../actions/auth'
class EditLocation extends Component{
constructor(props){
    super(props)
    this.state={
        username: '',
        password: '',
        errors:{}
    }
    console.log(this.props.location)
    this.handleChange = this.handleChange.bind(this)
}
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    validate = () => {
        const errors = {};
		    if (!this.state.username) errors.username = ERROR_BLANK
		    if (!this.state.password) errors.password = ERROR_BLANK
		return errors;
    };

    onSubmit=()=>{
        const errors = this.validate();
        this.setState({
			errors,
			redirect: true
		});
        const {username,password} = this.state;

        if (Object.keys(errors).length === 0) 
            this.props.authentication(username,password)
            
    }
    render(){
        const form = <div>
        <input name="username" value={this.state.username} onChange={this.handleChange}/>
        {this.state.errors.username}
        <input name="password" value={this.state.password} onChange={this.handleChange}/>
        {this.state.errors.password}
        <input onClick={this.onSubmit} type="submit"/> 
</div>
        return(
            <div>
                {
                this.props.auth.status && this.state.redirect
                    ? <p>{this.props.auth.token}</p> : form
                }
                {!this.props.auth.fetching ? <p>{this.props.auth.message}</p>:''}
            </div>
        )
    }
}
const mapStateToProps=({auth},)=>{
    return{
        auth
    }
}
const mapDispatchToProps = {
    authentication
}
export default connect(mapStateToProps,mapDispatchToProps)(EditLocation)