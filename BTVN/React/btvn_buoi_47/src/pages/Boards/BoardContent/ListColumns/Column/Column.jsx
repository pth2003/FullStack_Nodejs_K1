import { Box, Button, Tooltip, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ListCards from "./ListCards/ListCards";
import { mapOrder } from "~/utils/sorts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const COL_HEADER = "50px";
const COL_FOOTER = "56px";
function Column({ column, tasks }) {
  // const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
  if (!tasks) return;

  const tasksByCol = tasks.filter((task) => task.column === column.column);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.75 : undefined,
  };

  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          backgroundColor: "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          height: "fit-content",
          maxHeight: `calc( calc( 100vh - 48px ) - 40px)`,
        }}
      >
        {/* Col header */}
        <Box
          sx={{
            height: COL_HEADER,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{column?.columnName}</Typography>
          <DeleteOutlineIcon />
        </Box>
        {/* col list card */}
        <ListCards tasks={tasksByCol} />
        {/* col footer */}
        <Box
          sx={{
            height: COL_FOOTER,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button startIcon={<AddCardIcon />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: "pointer" }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
}

export default Column;
