const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const router = express.Router();
const mockupToken = 'THIS_IS_SECRET_TOKEN';
const mockupUser = {
  name: 'prakit',
  id: 1,
  role: 'admin',
};
router.get('/me', (req, res) => {
  const clientAuthHeader = req.headers.authorization;
  if (clientAuthHeader) {
    const token = clientAuthHeader.split(' ')[1];
    if (token === mockupToken) {
      res.status(200).json({ user: mockupUser });
    } else {
      res.status(401).json({ message: 'Your token is invalid' });
    }
  }
});
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@email.com' && password === 'admin') {
    res.json({
      token: mockupToken,
    });
  } else {
    res.status(401).json({ message: 'invalid email or password' });
  }
});
router.get('/hello', (req, res) => {
  res.json({ message: 'hello from internal api' });
});
app.use(router);
module.exports = {
  path: '/api',
  handler: app,
};
