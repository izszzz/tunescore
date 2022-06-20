import React from "react";
import SingleColumn from '../templates/SingleColumn';
import BackHeader from "../components/Headers/BackHeader"
import SignInForm from "../components/Forms/SignInForm";
import GonContextProvider from "../contexts/GonContext";

export default function SignIn(){
	return (
    <GonContextProvider>
			<SingleColumn 
				header={<BackHeader/>} 
				content={<SignInForm/>}
			/>
		</GonContextProvider>
	)
}
