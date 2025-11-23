import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Error Trap for debugging blank screen
window.onerror = function (message, source, lineno, colno, error) {
  const errorBox = document.createElement('div');
  errorBox.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);color:white;padding:20px;z-index:99999;overflow:auto;font-family:monospace;';
  errorBox.innerHTML = `
    <h2 style="color:#ff5555">Runtime Error</h2>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Location:</strong> ${source}:${lineno}:${colno}</p>
    <pre style="background:#333;padding:10px;border-radius:5px;white-space:pre-wrap">${error ? error.stack : 'No stack trace'}</pre>
  `;
  document.body.appendChild(errorBox);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ padding: 20, fontSize: 24, color: 'red' }}>TESTE DE DEBUG - SE VOCE VE ISSO, O BUILD ESTA FUNCIONANDO</div>
    {/* <App /> */}
  </React.StrictMode>,
)
