import pic from './71.jpg'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="pic" alt="pic"/>
      </header>
      <button className='b1'>CANDIDATES</button>
      <button className='b2'>VOTE</button>
      <button className='b3'>LIVE RESULTS</button>
    </div>
       
  );
}

export default App;
