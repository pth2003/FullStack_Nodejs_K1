import { Box } from "@mui/material";
import Card from "./Card/Card";
const COL_HEADER = "50px";
const COL_FOOTER = "56px";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
function ListCards({ tasks }) {
  // if (!tasks) {
  //   return null; // or return an appropriate component or message
  // }
  // console.log(tasks);
  return (
    <SortableContext
      items={tasks?.map((t) => t._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: "0 5px",
          m: "0 5px",
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: `calc( calc( 100vh - 48px ) - 40px - ${COL_HEADER} - ${COL_FOOTER})`,
        }}
      >
        {tasks?.map((task) => (
          <Card key={task._id} task={task} />
        ))}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
