import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./TracePage.css";

function TracePage() {
  const { batchId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/${batchId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("Batch not found");
        return res.json();
      })
      .then(setData)
      .catch(() => setError("❌ This batch does not exist or has been removed."));
  }, [batchId]);

  if (error) return <p className="trace-error">{error}</p>;
  if (!data) return <p className="trace-loading">Loading trace data...</p>;

  const latest = data[data.length - 1];

  return (
    <div className="trace-container">
      <h1>🍄 Organic Mushroom Trace</h1>
      <p className="trace-batch"><strong>Batch ID:</strong> {batchId}</p>

      <ul className="trace-list">
        {Object.entries(latest).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>

      <p className="trace-footer">Verified by OysterChain • Powered by Blockchain</p>
    </div>
  );
}

export default TracePage;

