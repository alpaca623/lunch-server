import Type from "../models/typeSchema";

export const TypeList = async (req, res) => {
  try {
    res.send(await Type.find({}));
  } catch (e) {
    console.log(e);
  }
};

export const TypeInsert = async (req, res) => {
  try {
    const { type } = req.body;
    let result = {};
    const nameCheck = await Type.find({ type });
    if (nameCheck.length !== 0) {
      result.status = 0;
      result.message = "Already name is existence";
    } else {
      result.status = 1;
      result.message = "success insert type";
      result.data = await Type.create({ type });
    }
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};
