import connect from '../../lib/mongodb';
import User from '../../model/schema';

connect();

export default async function handler(req, res) {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json({ status: 'Passwords do not match.' });
    }
    const user = await User.create(req.body);
    res.redirect('/dashboard');
    if (!user) {
      return res.json({ code: 'user not created.' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ status: 'Not able to create a new user.' });
  }
}
