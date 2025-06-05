import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TracePage from './TracePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/trace/:batchId" element={<TracePage />} />
        <Route path="/" element={<h2>Welcome to Mushroom Trace</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

