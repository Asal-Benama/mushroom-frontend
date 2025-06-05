import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TracePage() {
  const { batchId } = useParams();
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/trace/${batchId}`) // update when backend is public
      .then(res => res.json())
      .then(setHistory)
      .catch(err => setError("Failed to load trace data"));
  }, [batchId]);

  if (error) return <p>{error}</p>;
  if (history.length === 0) return <p>Loading...</p>;

  const latest = history[history.length - 1];

  return (
    <div>
      <h2>Trace Info for {batchId}</h2>
      {Object.entries(latest).map(([k, v]) => (
        <p key={k}><strong>{k}:</strong> {v}</p>
      ))}
    </div>
  );
}

