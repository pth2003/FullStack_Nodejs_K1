"use client";
import React from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

import "./flow.css";

import AddNodeOnEdgeDrop from "./AddNodeOnEdgeDrop";

export default () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);
