export const mergeDataToBoard = (columns, tasks) => {
  const boardData = {
    _id: "board-id-01",
    title: "TrungQuanDev MERN Stack Board",
    description: "Pro MERN stack Course",
    type: "public",
    ownerIds: [],
    memberIds: [],
    columnOrderIds: [],
    columns: [],
  };

  // Gán giá trị cho columnOrderIds
  boardData.columnOrderIds = columns.map((column) => column._id);

  // Gộp dữ liệu từ columns và tasks vào boardData
  boardData.columns = columns.map((column) => {
    const columnData = {
      _id: column._id,
      boardId: "board-id-01",
      title: column.columnName, // Lấy tên cột từ columnName thay vì column
      column: column.column,
      cardOrderIds: [],

      cards: tasks
        .filter((task) => task.column === column.column)
        .map((task) => ({
          _id: task._id,
          boardId: "board-id-01",
          columnId: column._id,
          column: task.column,
          title: task.content, // Lấy nội dung thay vì title
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
          // Thêm các thông tin khác nếu cần
        })),
    };

    // Lấy danh sách các cardOrderIds từ mảng cards
    columnData.cardOrderIds = columnData.cards.map((card) => card._id);

    return columnData;
  });

  return boardData;
};
