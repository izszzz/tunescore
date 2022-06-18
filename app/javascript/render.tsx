import "@hotwired/turbo-rails"
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

const home = document.getElementById('home');
if (!home) throw new Error('Failed to find the root element');
createRoot(home).render(<Home/>);

const signup = document.getElementById('signup');
if (!signup) throw new Error('Failed to find the root element');
createRoot(signup).render(<SignUp/>);
