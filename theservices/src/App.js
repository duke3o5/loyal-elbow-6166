import './App.css';
import AllRoutes from './components/All Routes';
import Navbar from './components/Routes/Navbar';
import Footer from './components/Routes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
