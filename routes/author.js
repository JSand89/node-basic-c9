const express =require('express')

const controllerAuthor =require('../controllers/author')
const router = express.Router()

router.post('/create',controllerAuthor.create)

module.exports = router