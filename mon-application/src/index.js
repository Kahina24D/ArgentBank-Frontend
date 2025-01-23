import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Importez le Provider
import store from './redux/store'; // Assurez-vous que votre store est correctement configuré
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Enveloppez l'application dans Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer la performance de votre application, passez une fonction 
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log)) 
// ou envoyez-les à un point de terminaison d'analytique.
reportWebVitals();
