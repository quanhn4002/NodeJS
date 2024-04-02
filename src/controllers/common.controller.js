import UploadModel from "../models/upload.model.js";

export function Upload(req, res) {
  const data = req.body;
  data.type = 1;
  // console.log(data);
  UploadModel.create(data)
    .then((resData) => res.status(201).json(resData))
    .catch((err) => res.status(400).json({ message: err }));
}

export function MultiUpload(req, res) {
  const data = req.body;
  // console.log(data);
  data.type = 2;
  UploadModel.create(data)
    .then((resData) => res.status(201).json(resData))
    .catch((err) => res.status(400).json({ message: err }));
}
