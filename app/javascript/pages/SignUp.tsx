import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import BackHeader from "../components/Headers/BackHeader"
import SignUpForm from "../components/Forms/SignUpForm";
import GonContextProvider from '../contexts/GonContext';

export default function SignUp() {
  return (
    <GonContextProvider>
      <SingleColumn
        header={<BackHeader />}
        content={<SignUpForm />}
      />
    </GonContextProvider>
  )
}