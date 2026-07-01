module.exports = (req, res, next) => {
  const now = new Date();

  const day = now.getDay(); // Sunday = 0
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHours = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHours) {
    return next();
  }

  res.render("closed");
};
