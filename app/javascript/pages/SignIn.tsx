import React from "react";
import SignInForm from "../components/Form/SignInForm";
import SingleColumn from '../templates/SingleColumn';

export default function SignIn(){
	return (
		<SingleColumn 
			header={null} 
			content={<SignInForm/>}
		/>
	)
}
