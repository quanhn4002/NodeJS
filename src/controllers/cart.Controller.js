import cart from "../models/cart.model.js";

//[POST] /cart
export function addCart(req, res) {
  const data = req.body;
  console.log(data);

  if (!data && data == {})
    return res.status(400).json({ message: "thiếu dữ liệu" });

  cart
    .create(data)
    .then((resData) => res.status(201).json(resData))
    .catch((err) => res.status(500).json({ message: err }));
}

export function getCartByUser(req, res) {
  const idUser = req.params.id;
  // console.log(userId);
  cart
    .findOne({ userId: idUser })
    .populate("userId")
    .populate({
      path: "item.productId",
      populate: {
        path: "categoryId",
      },
    })
    .then((resData) => res.json(resData))
    .catch((err) => res.json({ message: err }));
}

export async function updateItem(req, res) {
  try {
    const id = req.params.id;
    // console.log(id);
    const cartNow = await cart.findById(id);
    // console.log(cartNow);
    if (!cartNow || cartNow == {})
      return res.status(400).json({ message: "Không tìm thấy giỏ hàng" });

    const data = req.body;

    if (!data || data == {}) {
      return res.status(400).json({ message: "Không nhận được dữ liệu" });
    }

    cartNow.item = data.item;

    await cartNow.save();

    res.status(200).json({
      message: "Cập nhật thành công",
      cartNow,
    });
  } catch (err) {
    res.status(400).json({ message: err });
  }
}
