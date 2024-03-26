import category from "../models/category.model.js";
export function index(req, res) {
  category
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ Message: "có lỗi" });
    });
}
export function getByCate(req, res) {
  let id = req.params.id;
  if (id) {
    category
      .findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "O tìm thấy sản phẩm" });
      });
  } else {
    res.json({ Message: "Không nhận được dữ liệu" });
  }
}
export function postCate(req, res) {
  const ProNew = req.body;

  if (ProNew != {}) {
    category
      .create(ProNew)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "có lỗi" });
      });
  } else {
    res.json({ Message: "khong the thuc hien" });
  }
}
// [put]/product/:id sửa sản phẩm
export function putCate(req, res) {
  let id = req.params.id;
  if (id) {
    const catedata = req.body;
    if (catedata != {}) {
      category
        .findByIdAndUpdate(id, catedata, { new: true })
        .then((data) => {
          res.json(data);
        })
        .catch(() => {
          res.json({ Message: "Có lỗi" });
        });
    }
  } else {
    res.json({ Message: "k có sản phẩm" });
  }
}
// [delete]:/product/:id xóa sản phẩm
export function deleteCate(req, res) {
  let id = req.params.id;
  if (id) {
    category
      .findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "Có lỗi" });
      });
  } else {
    res.json({ Message: "k có sản phẩm" });
  }

  //xóa sp
}

//
