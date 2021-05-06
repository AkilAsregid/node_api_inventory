const express = require('express')
const router = express.Router();

app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the API'
    });
  });
  
  app.post('/posts', verifyToken, (req, res) => {  
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'Post created...',
          authData
        });
      }
    });
  });
  
  app.post('/login', (req, res) => {
    // Mock user
    const user = {
      id: 1, 
      username: 'brad',
      email: 'brad@gmail.com'
    }
  
    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
      res.json({
        token
      });
    });
  });
  
  // FORMAT OF TOKEN
  // Authorization: Bearer <access_token>
  
  // Verify Token


module.exports = router;