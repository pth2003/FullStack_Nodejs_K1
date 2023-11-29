"use client";

const { useState, useEffect } = require("react");

function useNetwork() {
  const [isOnline, setNetwork] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => setNetwork(false));
    window.addEventListener("online", () => setNetwork(true));
  });
  return isOnline;
}

export default useNetwork;
