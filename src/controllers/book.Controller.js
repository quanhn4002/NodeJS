import bookModel from "../models/book.model.js";
import bookCategories from "../models/booksCategory.model.js";
export function index(req, res) {
  bookModel
    .find()

    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ Message: err });
    });
}
export function getByidBook(req, res) {
  const id = req.params.id;
  bookModel
    .findById(id)
    // .populate("categoryId")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ Message: err });
    });
}
export function addBook(req, res) {
  const newBook = req.body;
  if (newBook != {}) {
    bookModel

      .create(newBook)
      .then((data) => {
        res.status(201).json({
          Message: "Thêm thành công",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({ Message: err });
      });
  } else {
    res.status(400).json({ Message: "Có lỗi sảy ra" });
  }
}
export function editBook(req, res) {
  let id = req.params.id;
  if (id) {
    const bookData = req.body;
    if (bookData != {}) {
      bookModel
        .findByIdAndUpdate(id, bookData, { new: true })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(400).json({ Message: err });
        });
    }
  } else {
    res.status(400).json({ Message: "Không tìm thấy sách" });
  }
}
export function deleteBook(req, res) {
  let id = req.params.id;
  if (id) {
    bookModel
      .findByIdAndDelete(id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ Message: "có lỗi" });
      });
  } else {
    res.status(400).json({ Message: "Không tìm thấy sách" });
  }
}
