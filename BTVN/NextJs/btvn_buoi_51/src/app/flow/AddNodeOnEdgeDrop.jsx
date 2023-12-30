import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { client } from "@/utils/client";
import { config } from "@/utils/config";
import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";
let id = 1;
const getId = () => `${id++}`;
const { SERVER_API } = config;
client.setUrl(SERVER_API);
const initialNodes = [
  {
    id: "0",
    type: "input",
    data: { label: "Node" },
    position: { x: 0, y: 50 },
  },
];
const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [label, setLabel] = useState("");
  const [nodeId, setNodeId] = useState(0);
  const [rfInstance, setRfInstance] = useState(null);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );

  const onNodeClick = useCallback((event, node) => {
    setLabel(node.data.label);
    setNodeId(node.id);
  }, []);
  // save node
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      postFlow(flow);
    }
  }, [rfInstance]);
  const postFlow = async (data) => {
    const { data: flow } = await client.post("/flow", data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, label };
        }
        return node;
      })
    );
    setLabel("");
  };
  const remodeNode = () => {
    setNodes((nds) =>
      nds.filter((node) => {
        if (node.id !== nodeId) {
          return node;
        }
      })
    );
    setLabel("");
  };
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <form
        className="w-full max-w-[300px] border border-outline rounded-[20px] p-3 updatenode__controls"
        onSubmit={handleSubmit}
      >
        <Label>Node:</Label>
        <Input
          type="input"
          placeholder="Update node..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <div className="flex gap-3 mt-5">
          <Button variant="outline">update</Button>
          <Button variant="outline" onClick={onSave}>
            save
          </Button>
          <Button variant="outline" type="button" onClick={remodeNode}>
            delete
          </Button>
        </div>
      </form>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onNodeClick={onNodeClick}
        onInit={setRfInstance}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Controls />
        <Background />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default AddNodeOnEdgeDrop;
