import React from 'react';

const Avatarlist = (props) =>{
	return (
<div className="Avatarstyle tc ma2 bg-light-purple dib pa5 grow shadow-4																														">
<img src={`https://joeschmoe.io/api/v1/${props.name}`}  alt="avatart"/>
	<h1>{props.name}</h1>
	<p>{props.work}</p>
	</div>
		)
}

export default Avatarlist;