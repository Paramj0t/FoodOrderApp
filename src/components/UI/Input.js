import classes from "./Input.module.css";
import React from "react";

//to make ref work on custom components // two way binding ka kaam krdeta h
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
