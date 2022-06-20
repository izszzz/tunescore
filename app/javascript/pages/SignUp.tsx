import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import BackHeader from "../components/Headers/BackHeader"
import SignUpForm from "../components/Forms/SignUpForm";

export default function SignUp() {
  return (
    <SingleColumn 
      header={<BackHeader />} 
      content={<SignUpForm />} 
    />
  )
}