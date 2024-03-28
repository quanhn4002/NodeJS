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
  //update item in cart
  let id = req.params.id;
  if (id) {
    const dataCart = req.body;
    if (dataCart != {}) {
      Cate.findByIdAndUpdate(id, dataCart, { new: true })
        .then((data) => {
          res.status(201).json(data);
        })
        .catch(() => {
          res.status(400).json({ Message: "Có lỗi" });
        });
    } else {
      res.status(400).json({ Message: "k có sản phẩm" });
    }
  } else {
    res.status(400).json({ Message: "k có sản phẩm" });
  }
}
export function deleteCart(req, res) {
  let id = req.params.id;
  if (id) {
    Cate.findByIdAndDelete(id)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch(() => {
        res.status(400).json({ Message: "Có lỗi" });
      });
  } else {
    res.status(400).json({ Message: "k có sản phẩm" });
  }
}
