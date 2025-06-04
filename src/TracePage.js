import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TracePage() {
  const { batchId } = useParams();
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/trace/${batchId}`)
      .then(res => {
        if (!res.ok) throw new Error("Batch not found");
        return res.json();
      })
      .then(setHistory)
      .catch(err => setError(err.message));
  }, [batchId]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (history.length === 0) return <p>Loading trace data...</p>;

  const latest = history[history.length - 1];

  return (
  <div>
    <h2>Trace Info for Batch: {batchId}</h2>
    {Object.entries(latest).map(([key, value]) => (
      <p key={key}>
        <strong>{key}:</strong> {value}
      </p>
    ))}
  </div>
    );
}


