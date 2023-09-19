import '../styles/App.css';

import Header from './headers/Header';
import LesRoutes from './Routes'

function App() {
  const url = window.location
  console.log(url);
  return (
    <div id="app">
      <Header />
      <LesRoutes />
    </div>
  );
}

export default App;
