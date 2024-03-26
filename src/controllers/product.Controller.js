const productList = [
  { id: 1, name: "product1", price: 300 },
  { id: 2, name: "abc", price: 600 },
  { id: 3, name: "abc", price: 900 },
];
// [get] /product lấy ra tất cả sản phẩm
import product from "../models/product.model.js";
import category from "../models/category.model.js";

// [GET] /product
export function index(req, res) {
  product
    .find()
    .populate("categoryId")
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ Message: "Có lỗi sảy ra" });
    });
}
// lấy dữ liệu từ database

// [get] /product/;id  lấy theo id
export function getById(req, res) {
  let id = req.params.id;
  if (id) {
    product
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
// [post] /product thêm sản phẩm
export function postPr(req, res) {
  const ProNew = req.body;

  if (ProNew != {}) {
    product
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
export function putPr(req, res) {
  let id = req.params.id;
  if (id) {
    const productdata = req.body;
    if (productdata != {}) {
      product
        .findByIdAndUpdate(id, productdata, { new: true })
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
export function deletePr(req, res) {
  let id = req.params.id;
  if (id) {
    product
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
