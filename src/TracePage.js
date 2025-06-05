import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TracePage() {
  const { batchId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/${batchId}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Batch not found");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, [batchId]);

  if (error) return <p>{error}</p>;
  if (data.length === 0) return <p>Loading trace data...</p>;

  const latest = data[data.length - 1];

  return (
    <div>
      <h2>Trace Info for {batchId}</h2>
      {Object.entries(latest).map(([k, v]) => (
        <p key={k}>
          <strong>{k}:</strong> {v}
        </p>
      ))}
    </div>
  );
}

