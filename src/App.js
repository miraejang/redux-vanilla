import { Routes, Route } from 'react-router';
import './App.css';
import Detail from './routes/detail';
import Home from './routes/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
