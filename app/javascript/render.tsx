import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';

const home = document.getElementById('home');
if (!home) throw new Error('Failed to find the root element');
createRoot(home).render(<Home />);
