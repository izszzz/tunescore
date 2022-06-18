import React from 'react';
import Header from '../components/Header';
import SingleColumn from '../templates/SingleColumn';

export default function SignUp() {
  return (
    <SingleColumn header={<Header />} content={<p>signup</p>} />
  )
}