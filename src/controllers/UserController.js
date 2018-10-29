import { User } from '../models/';
import _ from 'lodash';

class UserController {

  async login(req, res) {
    const targetUser = _.pick(req.body, ['email', 'password']);

    try {
      const user = await User.findByCredentials(targetUser);
      const token = user.generateAuthToken();

      res.header('Auth', token).status(201).send(_.pick(user, ['id', 'name', 'email']));

    } catch (error) {
      req.status(404).json({ message: 'User not found '});
    }
    
  }

};

export default UserController;