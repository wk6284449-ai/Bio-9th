import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import EmailGate from './EmailGate.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <EmailGate>
    <App />
  </EmailGate>
);
