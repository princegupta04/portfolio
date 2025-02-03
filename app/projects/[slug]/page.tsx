"use client";

import React, { useEffect, useState } from "react";

export default function Slug() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      const result = await response.json();
      setData(result);
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>This is a project</h1>
      {data ? <pre>{JSON.stringify(data.bpi, null, 2)}</pre> : <p>Loading...</p>}
    </>
  );
}
