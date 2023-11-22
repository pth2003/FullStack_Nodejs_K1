import { Box } from "@mui/material";
import "./style.css";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
import { cloneDeep } from "lodash";
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
function BoardContent({ board }) {
  const { columns, tasks } = board;

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);
  const [orderedColumns, setOrderedColumns] = useState([]);
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [oldColumn, setOldClumn] = useState(null);
  const columnOrderIds = columns.map((column) => column._id);
  useEffect(() => {
    setOrderedColumns(mapOrder(columns, columnOrderIds, "_id"));
  }, [board]);
  // tim mot col theo cardid

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) => column.column === cardId);
  };
  const handleDragStart = (e) => {
    setActiveDragItemId(e?.active.id);

    setActiveDragItemType(
      e.active.data?.current?.columnName
        ? ACTIVE_DRAG_ITEM_TYPE.COLUMN
        : ACTIVE_DRAG_ITEM_TYPE.CARD
    );
    setActiveDragItemData(e.active.data?.current);
    if (ACTIVE_DRAG_ITEM_TYPE.CARD) {
      // neu keo card thi luu gia tri  column cu
      setOldClumn(findColumnByCardId(e?.active.data.current.column));
    }
  };
  // qua trinh keo 1 phan tu
  const hanldeDragOver = (e) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;
    // card
    const { active, over } = e;
    if (!active || !over) return;
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    const { id: overCardId } = over;

    // tim col theo cardid
    const activeColumn = findColumnByCardId(activeDraggingCardData.column);
    const overColumn = findColumnByCardId(over.data.current.column);
    if (!activeColumn || !overColumn) return;
    // xu lys keo tha giua hai col khac nhau
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns((prevColumns) => {
        // tim vi tri cuar overCard trong col dich den
        const overCardIndex = overColumn?.cards.findIndex(
          (card) => card._id === overCardId
        );
        let newCardIndex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : orderedColumns.cards.length + 1;

        const nextColumns = cloneDeep(prevColumns);
        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        );
        // if (nextActiveColumn) {
        //   nextActiveColumn.cards = nextActiveColumn.cards.filter(
        //     (card) => card._id !== activeDraggingCardId
        //   );
        //   nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
        //     (card) => card._id
        //   );
        // }
        // if (nextOverColumn) {
        //   nextOverColumn.cards = nextOverColumn.cards.filter(
        //     (card) => card._id !== activeDraggingCardId
        //   );
        //   // them card vao column  dich
        //   nextOverColumn.cards = nextOverColumn.cards.toSpliced(
        //     newCardIndex,
        //     0,
        //     activeDraggingCardData
        //   );
        //   nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
        //     (card) => card._id
        //   );
        // }
        return nextColumns;
      });
    }
  };
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (!active || !over) return;

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData },
      } = active;

      // tim col theo cardid
      const activeColumn = findColumnByCardId(activeDraggingCardData.column);
      const overColumn = findColumnByCardId(over.data.current.column);

      if (!activeColumn || !overColumn) return;

      // if (oldColumn._id !== overColumn._id) {
      //   // khac col
      //   // setOrderedColumns((prevColumns) => {
      //   //   // tim vi tri cuar overCard trong col dich den
      //   //   const overCardIndex = overColumn?.cards.findIndex(
      //   //     (card) => card._id === overCardId
      //   //   );
      //   //   let newCardIndex;
      //   //   const isBelowOverItem =
      //   //     active.rect.current.translated &&
      //   //     active.rect.current.translated.top >
      //   //       over.rect.top + over.rect.height;
      //   //   const modifier = isBelowOverItem ? 1 : 0;
      //   //   newCardIndex =
      //   //     overCardIndex >= 0
      //   //       ? overCardIndex + modifier
      //   //       : orderedColumns.cards.length + 1;
      //   //   const nextColumns = cloneDeep(prevColumns);
      //   //   const nextActiveColumn = nextColumns.find(
      //   //     (column) => column._id === activeColumn._id
      //   //   );
      //   //   const nextOverColumn = nextColumns.find(
      //   //     (column) => column._id === overColumn._id
      //   //   );
      //   //   if (nextActiveColumn) {
      //   //     nextActiveColumn.cards = nextActiveColumn.cards.filter(
      //   //       (card) => card._id !== activeDraggingCardId
      //   //     );
      //   //     nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
      //   //       (card) => card._id
      //   //     );
      //   //   }
      //   //   if (nextOverColumn) {
      //   //     nextOverColumn.cards = nextOverColumn.cards.filter(
      //   //       (card) => card._id !== activeDraggingCardId
      //   //     );
      //   //     // them card vao column  dich
      //   //     nextOverColumn.cards = nextOverColumn.cards.toSpliced(
      //   //       newCardIndex,
      //   //       0,
      //   //       activeDraggingCardData
      //   //     );
      //   //     nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
      //   //       (card) => card._id
      //   //     );
      //   //   }
      //   //   return nextColumns;
      //   // });
      // } else {
      //   // cung col
      //   //lay vi tri cu cua oldColumn

      //   const oldCardIndex = tasks.findIndex(
      //     (task) => task.column === oldColumn.column
      //   );
      //   // lay vi tri moi tu over
      //   const newCardIndex = tasks.findIndex(
      //     (task) => task.column === overColumn.column
      //   );
      //   const dndOrderCards = arrayMove(tasks, oldCardIndex, newCardIndex);
      //   console.log(dndOrderCards);
      //   setOrderedColumns((prevColumns) => {
      //     const nextColumns = cloneDeep(prevColumns);
      //     const targetColumn = nextColumns.find(
      //       (c) => c._id === overColumn._id
      //     );

      //     targetColumn.cards = dndOrderCards;
      //     targetColumn.cardOrderIds = dndOrderCards.map((i) => i._id);

      //     // tra ve vi tri state chuan vi tri
      //     return nextColumns;
      //   });
      // }
    }
    // xu ly keo tha column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        //lay vi tri cu cua active
        const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
        // lay vi tri moi tu over
        const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

        const dndOrderColumns = arrayMove(orderedColumns, oldIndex, newIndex);
        // const  dndOrderColumnsIds = dndOrderColumns.map(c => c._id);
        setOrderedColumns(dndOrderColumns);
      }
    }
    // clear du lieu sau khi keo tha
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldClumn(null);
  };
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      // onDragOver={hanldeDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: "calc(100vh - 48px)",
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} tasks={tasks} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} tasks={tasks} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <Card task={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
