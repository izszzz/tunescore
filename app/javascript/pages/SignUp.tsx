import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import SignUpForm from "../components/Form/SignUpForm";

export default function SignUp() {
  return (
    <SingleColumn 
      header={null} 
      content={<SignUpForm />} 
    />
  )
}