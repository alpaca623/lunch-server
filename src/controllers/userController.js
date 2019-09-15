import User from '../models/userSchema';

export const userInsert = async (req, res) => {
  try {
    console.log(req.body);
    const nameCheck = await User.find(req.body.name);
    console.log(nameCheck);
    await User.create(req.body);
  } catch (e) {
    console.log(e);
  }
}