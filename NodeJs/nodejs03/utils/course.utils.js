module.exports = {
  isCourse: (user, courseId) => {
    // user : object
    // courid : Khoa hoc can kiem tra
    const result = user.courses?.find((item) => +item.id === +courseId);
    return result ? true : false;
  },
};
