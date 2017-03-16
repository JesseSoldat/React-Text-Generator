import React, {Component} from 'react';


const Output = (props) => {
	return (
	<div className='well output'>
		{props.value}
	</div>
	);
};

export default Output;