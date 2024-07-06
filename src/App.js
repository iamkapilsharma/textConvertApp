import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormText from './FormText';
import About from './About';

function App() {
  return (
    <>
    <Navbar title="TackOn" about="About Us"></Navbar>
    <div className="container my-3">
      <FormText heading="Enter the text to analyze below"></FormText>
    </div>
    </>
  );
}

export default App;
