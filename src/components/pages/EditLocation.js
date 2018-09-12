import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchLocationById} from '../../actions/location'
class EditLocation extends Component{
constructor(props){
    super(props)
    this.state={
        title: this.props.location ? this.props.location.title :'',
        content: this.props.location ? this.props.location.content :''
    }
    console.log(this.props.location)
    this.handleChange = this.handleChange.bind(this)
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
    render(){
        //console.log(this.props.location)
        return(
            <div>
                <form>
                    <input name="title" value={this.state.title} onChange={this.handleChange}/>
                    <input name="content" value={this.state.content} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
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
    fetchLocationById
}
export default connect(mapStateToProps,mapDispatchToProps)(EditLocation)