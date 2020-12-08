import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Features from './components/Features/Features/Features';
import Solve from './components/Solve/Solve';

function App() {
  return (
    <div className="main">
      <Navbar/>
      <Header/>
      <Features/>
      <Solve/>
    </div>
  );
}

export default App;
