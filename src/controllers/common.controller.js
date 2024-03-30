import UploadModel from "../models/upload.model.js";

export function Upload(req, res) {
  const data = req.body;
  // console.log(data);
  UploadModel.create(data)
    .then((resData) => res.status(201).json(data))
    .catch((err) => res.status(400).json({ message: err }));
}
