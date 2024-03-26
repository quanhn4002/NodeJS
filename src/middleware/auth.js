import "dotenv/config";
import jwt from "jsonwebtoken";
function checkAuth(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send("Thiếu token");
    }
    jwt.verify(token, process.env.KEY_SECRET, function (err, decoded) {
      if (err) {
        if (err.name == "JsonWebTokenError") {
          return res.status(401).send("Token không hợp lệ");
        } else if (err.name == "TokenExpiredError") {
          return res.status(401).send("Token hết hạn");
        }
      }
      next();
    });
  } else {
    return res.status(401).send("Không có token");
  }
}
export default checkAuth;
