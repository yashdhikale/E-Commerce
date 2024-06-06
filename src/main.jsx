// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom';

const clerkPublishableKey = 'pk_test_Ymxlc3NlZC1maXJlZmx5LTQzLmNsZXJrLmFjY291bnRzLmRldiQ'; 
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <App />
  </ClerkProvider>
  
);
