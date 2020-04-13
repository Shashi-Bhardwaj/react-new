import React, {Component} from 'react'
import './Demo.css';

//functional based arhitecture
const Demo = ({name}) =>{
	return (
		 	<div className="mystyle">
		 	<h2>hello {name}</h2>

		 	</div>
		 	)
}

// component based architcteture
/*class Demo extends Component{
	constructor(props){
		super(props)
		this.state = {
		 inputvalue:'',
		 values:[]

		}

	}
 	onChangeInput = (event) => {
 			this.setState({inputvalue:event.target.value})
 	}
 	add = () => {
 		console.log(this.state.inputvalue);
 		this.setState({values:[...this.state.values,this.state.inputvalue]})
 	}

	 render(){
	 	console.log(this.state.values)
	 	return (
		 	<div className="mystyle">
		 	<h2>hello {this.props.name}</h2>
		 		<input type="text" onChange={this.onChangeInput}/>
		 		<button onClick={this.add}>click me</button>
		 	</div>
		 	)
		 }
	}*/



export default Demo