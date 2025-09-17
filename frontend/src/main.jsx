import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <App />
 )
// hydrateRoot(document.getElementById('root'),<App/>);
