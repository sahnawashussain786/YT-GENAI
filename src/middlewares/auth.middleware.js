import jwt from "jsonwebtoken";

function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).josn({
      message: "token not provided",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).josn({
      message: "invalid token",
    });
  }
}

export default {authUser}
