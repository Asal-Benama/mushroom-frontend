import { Routes, Route } from "react-router-dom";
import TracePage from "./TracePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Welcome to MushroomChain</h1>
          <p>This is your homepage.</p>
        </div>
      } />
      <Route path="/trace/:batchId" element={<TracePage />} />
    </Routes>
  );
}

