import { User } from '../models/';

export default async (req, res, next) => {
  let token = req.headers['token'];

  try {
    let user = await User.findByToken(token);
    req.user = user;
    req.token = token;
    next();

  } catch (error) {
    res.status(401).send({ message: error });
  }

};