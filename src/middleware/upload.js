import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "src/uploads");
  },
  filename: (req, file, callback) => {
    console.log(file);
    const filename = Date.now() + path.extname(file.originalname);
    req.body.image = filename;

    callback(null, filename);
  },
});
export const upload = multer({ storage: storage });
