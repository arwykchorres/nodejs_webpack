const router = require('express').Router();

router.route('/home').get((req, res) => {
  res.status(200).json({ result: 'response' });
});

module.exports = router;
