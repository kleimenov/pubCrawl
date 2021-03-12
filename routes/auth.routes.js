const { Roruter, Router } = require('express');
const router = Router();

// /api/auth (all next routs will be concatinate with this path)


//first auth route is:  /api/auth/register
router.post('/register', async (req, res) => {
     
})

//second auth route is:  /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router