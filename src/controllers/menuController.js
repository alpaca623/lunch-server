import Menu from "../models/menuSchema";

export const MenuList = async (req, res) => {
  try {
    res.send(await Menu.find({}));
  } catch (e) {
    console.log(e);
  }
};

export const MenuInsert = async (req, res) => {
  try {
    const { name, price, type } = req.body;
    const check = await Menu.find({ name });

    console.log("check", check);
    let result = {};
    result = await Menu.create({ name, price, type });
    console.log(result);
    res.send(result);
  } catch (e) {}
};
