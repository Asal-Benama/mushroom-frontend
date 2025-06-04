import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TracePage() {
  const { batchId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Placeholder — replace with real API later
    setTimeout(() => {
      setData({
        sawdustSource: "Sawmill A",
        substrate: "Corn, Nitrate",
        inoculationDate: "2025-05-01",
        harvestDate: "2025-06-01",
      });
    }, 500);
  }, [batchId]);

  if (!data) return <p>Loading batch info...</p>;

  return (
    <div>
      <h2>Batch ID: {batchId}</h2>
      <p>Sawdust Source: {data.sawdustSource}</p>
      <p>Substrate: {data.substrate}</p>
      <p>Inoculation Date: {data.inoculationDate}</p>
      <p>Harvest Date: {data.harvestDate}</p>
    </div>
  );
}

export default TracePage;

