import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TracePage() {
  const { batchId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://mushroom-backend.onrender.com/api/trace/${batchId}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load batch:", err));
  }, [batchId]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Batch: {data.batchId}</h1>
      {data.history.map((step, i) => (
        <div key={i} className="my-2 p-2 border rounded">
          <p><strong>Function:</strong> {step.function}</p>
          <p><strong>Org:</strong> {step.org || "Org1"}</p>
          <p><strong>Time:</strong> {step.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

