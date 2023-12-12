const roleMiddleware = (req, res, next) => {
  const status = false;
  if (!status) {
    res.redirect("/users");
    return;
  }
  next();
};
export default roleMiddleware;
