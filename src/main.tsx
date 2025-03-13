import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'
import "./assets/styles/base/_fonts.scss";
import "./assets/fonts/fonts.ts";
import ErrorBoundary from "./components/ErrorBoundary";

import "./assets/styles/vendors/_tailwind.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
