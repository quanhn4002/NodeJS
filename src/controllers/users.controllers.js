import user from "../models/users.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
export function index(req, res) {
  // tìm kiếm theo tên
  const nameString = req.query.name;
  const filter = {};
  if (nameString) filter.name = nameString;

  user
    .find(filter)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ Message: "Có lỗi" });
    });
}

export function getIdUser(req, res) {
  let id = req.params.id;
  if (id) {
    user
      .findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ Message: err });
      });
  } else {
    res.json({ Message: "không tìm thấy sản phẩm" });
  }
}

export function postUser(req, res) {
  const userNew = req.body;
  if (userNew != {}) {
    user
      .create(userNew)
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

export function putUser(req, res) {
  const id = req.params.id;
  if (id) {
    const userData = req.body;
    if (userData != {}) {
      user
        .findByIdAndUpdate(id, userData, { new: true })
        .then((data) => {
          res.json(data);
        })
        .catch(() => {
          res.json({ Message: "Đã có lỗi" });
        });
    } else {
      res.json({ Message: "Có lỗi" });
    }
  } else {
    res.json({ Message: "Không thực hiện được" });
  }
}

export function deleteUser(req, res) {
  let id = req.params.id;
  if (id) {
    user
      .findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "Có lỗi sảy ra" });
      });
  } else {
    res.json({ Message: "Không tìm thấy dữ liệu" });
  }
}
//đăng ký
export async function signup(req, res) {
  try {
    //lấy data
    const data = req.body;

    //kiểm tra user theo username
    const userExist = await user.findOne({ email: data.email });

    if (userExist)
      return res
        .status(400)
        .json({ message: `Đã tồn tại email: ${data.email}` });

    //Mã hóa mật khẩu
    if (data.password && data.password != "") {
      // kiểm tra độ dài của password
      if (data.password.length < 6)
        return res.json({ message: "Password cần tối thiểu 6 kí tự" });

      const passwordHashed = await bcryptjs.hash(data.password, 10);
      // Gán lại mật khẩu sau khi đã mã hóa
      data.password = passwordHashed;
    }

    // thêm vào cơ sở dữ liệu
    const userSuccess = await user.create(data);

    if (userSuccess) {
      // ẩn đi password đã mã hóa
      userSuccess.password = undefined;
      res.status(201).json({
        message: "Thêm tài khoản thành công",
        data: userSuccess,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}
//đăng nhập
export async function signin(req, res) {
  // {
  //     username: email,
  //     password: "123456"
  // }
  // lấy data
  const data = req.body;
  // kiểm tra username có tồn tại hay không
  const userExist = await user.findOne({ email: data.username });

  if (!userExist) return res.status(400).json({ message: `Sai tài khoản` });

  // kiểm tra mật khẩu
  const isCheck = await bcryptjs.compare(data.password, userExist.password);

  if (!isCheck) return res.status(400).json({ message: `Sai mật khẩu` });

  //sau khi đăng nhập thành công
  // tạo token từ thư viên jwt
  const token = jwt.sign(
    { name: userExist.name, username: userExist.email },
    process.env.KEY_SECRET,
    { expiresIn: "1h" }
  );

  console.log(token);
  if (token) {
    userExist.password = undefined;
    res.status(201).json({
      message: "Đăng nhập thành công",
      data: userExist,
      token,
    });
  }
}
