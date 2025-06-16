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
      .catch(() => setError("❌ Batch not found or no longer available."));
  }, [batchId]);

  if (error) return <div className="trace-error">{error}</div>;
  if (!data) return <div className="trace-loading">Loading trace details...</div>;

  const latest = data[data.length - 1];

  return (
    <div className="trace-page">
      <div className="trace-card">
        <h1>🍄 Oyster Mushroom Traceability</h1>
        <p className="trace-batch-id">Batch: <strong>{batchId}</strong></p>

        <div className="trace-table">
          {Object.entries(latest.Value).map(([key, value]) => (
            <div className="trace-row" key={key}>
              <div className="trace-label">{key}</div>
              <div className="trace-value">{value}</div>
            </div>
          ))}
        </div>

        <p className="trace-footer">Certified Organic • Powered by Blockchain</p>
      </div>
    </div>
  );
}

export default TracePage;

