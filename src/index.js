
module.exports = (authFn) => (req, res, next) => {
  authFn(req)
    .then((user) => {
      req.user = user;

      return next();
    })
    .catch((err) => {
      return res.status(401).json(err);
    });
};
