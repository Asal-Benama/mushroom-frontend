import React from "react";
import { useParams } from "react-router-dom";

export default function TracePage() {
  const { batchId } = useParams();

  // mock trace data
  const mockData = {
    sawdustSource: "Sawmill A",
    substrate: "Corn, Nitrate",
    inoculationDate: "2025-05-01",
    harvestDate: "2025-06-01",
  };

  return (
    <div>
      <h2>Trace Info for Batch: {batchId}</h2>
      <p><strong>Sawdust Source:</strong> {mockData.sawdustSource}</p>
      <p><strong>Substrate:</strong> {mockData.substrate}</p>
      <p><strong>Inoculation Date:</strong> {mockData.inoculationDate}</p>
      <p><strong>Harvest Date:</strong> {mockData.harvestDate}</p>
    </div>
  );
}

