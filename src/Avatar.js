import React from 'react'; // to show the jsx sytax
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist'

const Avatar = (props) =>{

const avatarlistarray = [
	{
		id:1,
		name:"vinod",
		work:"web developer" 
	},
	{
		id:2,
		name:"Thapa",
		work:"FrontEnd developer" 
	},
	{
		id:3,
		name:"bahadur",
		work:"Database" 
	},
	{
		id:4,
		name:"Naran",
		work:"BackEnd" 
	}

]

const arraylistcard = avatarlistarray.map( ( avatarcard, i ) =>  {

	return <Avatarlist id={avatarlistarray[i].id} 
				name={avatarlistarray[i].name}   
				work={avatarlistarray[i].work}/>
}
)

	return (
		<div className="tc">
		<h1>welcome to avatar world</h1>
		{arraylistcard}
       <button className="db ">subscribe</button>
       </div>
	)
}

export default Avatar;