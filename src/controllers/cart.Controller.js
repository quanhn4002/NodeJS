import Cate from "../models/cart.model.js";
export function index(req, res) {
  Cate.find()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(() => {
      res.status(400).json({ Message: "có lỗi" });
    });
}

export function getByUser(req, res) {
  const idUser = req.params.id;
  // console.log(userId);
  Cart.findOne({ userId: idUser })
    .populate("userId")
    .populate({
      path: "items.productId",
      populate: {
        path: "categoryId",
      },
    })
    .then((resData) => res.json(resData))
    .catch((err) => res.json({ message: err }));
}

export function postCart(req, res) {
  const dataCart = req.body;
  if (dataCart != {}) {
    Cate.create(dataCart)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch(() => {
        res.status(400).json({ Message: "có lỗi" });
      });
  } else {
    res.status(400).json({ Message: "K thể thuc hien " });
  }
}

export function putCart(req, res) {
  // Cập nhật sản phẩm trong giỏ hàng
  let id = req.params.id;
  if (!id) {
    return res.status(400).json({ Message: "Không có ID sản phẩm" });
  }

  const dataCart = req.body;
  if (!dataCart || Object.keys(dataCart).length === 0) {
    return res.status(400).json({ Message: "Không có dữ liệu sản phẩm" });
  }

  Cate.findByIdAndUpdate(id, dataCart, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ Message: "Sản phẩm không tồn tại" });
      }
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Lỗi khi cập nhật sản phẩm trong giỏ hàng:", error);
      res
        .status(500)
        .json({ Message: "Lỗi khi cập nhật sản phẩm trong giỏ hàng" });
    });
}

export function deleteCart(req, res) {
  let id = req.params.id;
  if (!id) {
    return res.status(400).json({ Message: "Không có ID sản phẩm" });
  }

  Cate.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ Message: "Sản phẩm không tồn tại" });
      }
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
      res.status(500).json({ Message: "Lỗi khi xóa sản phẩm khỏi giỏ hàng" });
    });
}
