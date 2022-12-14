import express from 'express';
import cors from 'cors';
import connect from './lib/mongodb.js';
import User from './model/schema.js';

const app = express();

app.use(express.json());
app.use(cors());

connect();

app.get('/', (req, res) => {
  res.json('server running!');
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json({ status: 'Passwords do not match.' });
    }
    const user = await User.create({
      email,
      password,
    });
    res.redirect('/dashboard');
    if (!user) {
      return res.json({ code: 'user not created.' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ status: 'Not able to create a new user.' });
  }
});

app.listen(3001, () => {
  console.log('server running');
});
