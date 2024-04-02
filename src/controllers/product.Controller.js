// [get] /product lấy ra tất cả sản phẩm
import product from "../models/product.model.js";
import category from "../models/category.model.js";

export function getProductbyCategory(req, res) {
  // lấy ra sản phẩm theo danh mục
  let Cate_id = req.params.id;
  console.log(Cate_id);
  if (Cate_id) {
    product
      .find({ categoryId: Cate_id })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "Có lỗi" });
      });
  } else {
    res.json({ Message: "Không tìm thấy sản phẩm" });
  }
}
// [GET] /product
export function index(req, res) {
  //phân trang
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  console.log(page, limit, skip);
  // tìm kiếm

  const filter = {};
  //regex so sánh chuối gần
  if (req.query.name) {
    filter.name = { $regex: req.query.name };
  }
  if (req.query.min) {
    filter.price = { $lte: req.query.min }; // lte : so sánh nhỏ hơn hoặc bằng
  }
  if (req.query.max) {
    filter.price = { $gte: req.query.max }; // gte : so sánh lớn hơn hoặc bằng
  }
  const sort = { price: -1, name: 1 };

  product
    .find(filter)
    // phân trang
    .skip(skip)
    .limit(limit)
    .sort(sort)
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
        res.json({ Message: "O tìm     thấy sản phẩm" });
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
