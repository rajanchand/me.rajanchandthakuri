import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/me.rajanchandthakuri">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
