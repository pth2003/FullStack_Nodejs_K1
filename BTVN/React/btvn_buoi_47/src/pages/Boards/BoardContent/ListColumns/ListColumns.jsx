import { Box, Button } from "@mui/material";
import Column from "./Column/Column";
import AddIcon from "@mui/icons-material/Add";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
// SortableContext yêu cầu 1 arr nên map 1 mảng obj là không nên
function ListColumns({ columns }) {
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          width: "100% ",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            borderRadius: "6px",
            height: "fit-content",
            backgroundColor: "#ffffff3d",
          }}
        >
          <Button
            startIcon={<AddIcon />}
            sx={{
              color: "white",
              width: "100%",
              justifyContent: "flex-start",
              pl: 2.5,
              py: 1.5,
            }}
          >
            ADD NEW COLUMN
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumns;
// items={columns?.map((c) => c._id)}
