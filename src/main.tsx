import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './theme.scss';
import Dashboard from './features/dashboard/dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>
);
