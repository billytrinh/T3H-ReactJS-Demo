import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Classroom from './components/Classroom';

function App() {
  return (
    <div className='row'>
      <div className='col-3'></div>
      <div className='col-6'>
      <h1>DEMO ReactJS</h1>
      <Header/>
      <Classroom/>
    </div>
    </div>
  );
}

export default App;
