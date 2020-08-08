// packages
const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    res.status(200).json({
      // user values passed through from auth middleware
      user: req.user
    });
  });
  
  module.exports = router;