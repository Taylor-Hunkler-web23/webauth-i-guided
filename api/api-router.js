const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const bcrypt = require ('bcryptjs')

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});


const hash = bcrypt.hashSync(user.password, 12)

user.password=hash;
  let user = req.body

rourter.post('/hash', (req, res) => {
  // read a password from the body
  // hash the password using bcryptjs
  // return it to the user in an object that looks like
  // { password: 'original passsword', hash: 'hashed password' }

  .then(saved => {
    res.satus(201).json(saved)

  })
})


module.exports = router;
