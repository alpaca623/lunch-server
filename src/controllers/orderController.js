import Order from "../models/orderSchema";

export const OrderList = async (req, res) => {
  try {
    const { type } = req.query;
    const today = new Date();
    let condition = {};
    if (type === "today") {
      condition = {
        createAt: {
          $gte: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            0,
            0,
            0
          ),
          $lte: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            23,
            59,
            59
          )
        }
      };
    }
    console.log(condition);
    res.send(await Order.find(condition));
  } catch (e) {
    console.log(e);
  }
};

export const OrderInsert = async (req, res) => {
  try {
    res.send(await Order.create(req.body));
  } catch (e) {
    console.log(e);
  }
};
