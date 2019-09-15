import User from "../models/userSchema";

export const userCheck = async (req, res) => {
  try {
    const { userId: name } = req.body;
    let result = {};
    const check = await User.find({ name });
    console.log(check);
    if (check.length === 0) {
      result.status = 0;
      result.message = "사용자를 찾을 수 없습니다";
    } else {
      result.status = 1;
      result.message = "success";
      result.data = check;
    }
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};