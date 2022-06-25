import React from "react";
import SingleColumn from '../templates/SingleColumn';
import BackHeader from "../components/Headers/BackHeader"
import SignInForm from "../components/Forms/SignInForm";

export default function SignIn() {
	return (
		<SingleColumn
			header={<BackHeader />}
			content={<SignInForm />}
		/>
	)
}
